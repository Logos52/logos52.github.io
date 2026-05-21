#!/usr/bin/env python3
"""
Drift detection module for the maintenance tool.

Tracks changes to markdown files in the vault using SHA256 hashes.
Manifest is stored at _meta/source-hashes.json
"""

import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Tuple


def hash_file(path: Path) -> str:
    """Return a SHA256 digest for a file."""
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def get_indexable_files(vault_path: Path) -> List[Path]:
    """
    Return a sorted list of .md files that should be tracked for drift.

    Only includes files under wiki/, and excludes _meta/ and raw/.
    """
    vault_path = Path(vault_path)
    files = []

    wiki_dir = vault_path / "wiki"
    if not wiki_dir.exists():
        return files

    for md_file in sorted(wiki_dir.rglob("*.md")):
        rel = md_file.relative_to(vault_path)
        rel_str = str(rel)

        # Skip anything in _meta or raw
        if rel_str.startswith("_meta/") or rel_str.startswith("raw/"):
            continue

        files.append(md_file)

    return files


def build_manifest(vault_path: Path) -> Dict:
    """Build a new hash manifest and save it to _meta/source-hashes.json"""
    vault_path = Path(vault_path)
    files = get_indexable_files(vault_path)

    hashes = {}
    for f in files:
        rel_path = str(f.relative_to(vault_path))
        hashes[rel_path] = hash_file(f)

    manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "page_count": len(hashes),
        "hashes": hashes,
    }

    meta_dir = vault_path / "_meta"
    meta_dir.mkdir(parents=True, exist_ok=True)

    manifest_path = meta_dir / "source-hashes.json"
    manifest_path.write_text(
        json.dumps(manifest, indent=2, sort_keys=True),
        encoding="utf-8"
    )

    return manifest


def load_manifest(vault_path: Path) -> Dict:
    """Load the existing hash manifest if it exists."""
    manifest_path = Path(vault_path) / "_meta" / "source-hashes.json"

    if not manifest_path.exists():
        return {"hashes": {}}

    try:
        return json.loads(manifest_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        print("Warning: Corrupt hash manifest. Starting fresh.")
        return {"hashes": {}}


def check_drift(vault_path: Path) -> Dict:
    """
    Compare current files against the last saved manifest.

    Returns a dict with:
        - clean: bool
        - added: list
        - removed: list
        - changed: list
    """
    vault_path = Path(vault_path)

    old_manifest = load_manifest(vault_path)
    old_hashes = old_manifest.get("hashes", {})

    # Build current state
    current_files = get_indexable_files(vault_path)
    current_hashes = {}
    for f in current_files:
        rel = str(f.relative_to(vault_path))
        current_hashes[rel] = hash_file(f)

    added = sorted(set(current_hashes) - set(old_hashes))
    removed = sorted(set(old_hashes) - set(current_hashes))
    changed = sorted(
        p for p in set(current_hashes) & set(old_hashes)
        if current_hashes[p] != old_hashes[p]
    )

    result = {
        "clean": not (added or removed or changed),
        "added": added,
        "removed": removed,
        "changed": changed,
        "total_tracked": len(current_hashes),
    }

    # Always update the manifest after checking
    build_manifest(vault_path)

    return result
