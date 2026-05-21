#!/usr/bin/env python3
"""
Basic evaluation harness for evolving the L3 → L2 voice converter.

Usage:
    python tools/evolve/evaluate.py --prompt prompts/v01_stricter_bad_patterns.md
"""

import argparse
import os
from pathlib import Path
from openai import OpenAI
from datetime import datetime

# --- Configuration ---
XAI_API_KEY = os.getenv("XAI_API_KEY")
if not XAI_API_KEY:
    raise ValueError("XAI_API_KEY environment variable not set.")

client = OpenAI(
    api_key=XAI_API_KEY,
    base_url="https://api.x.ai/v1",
)

MODEL = "grok-4-0709"   # Update as needed


def load_prompt(prompt_path: Path) -> str:
    return prompt_path.read_text(encoding="utf-8")


def load_test_case(test_case_path: Path) -> dict:
    """Very simple parser for our test case format."""
    content = test_case_path.read_text(encoding="utf-8")
    sections = {}
    current_section = None
    buffer = []

    for line in content.splitlines():
        if line.startswith("## "):
            if current_section:
                sections[current_section] = "\n".join(buffer).strip()
            current_section = line[3:].strip()
            buffer = []
        elif current_section:
            buffer.append(line)

    if current_section:
        sections[current_section] = "\n".join(buffer).strip()

    return {
        "name": test_case_path.stem,
        "l3_input": sections.get("L3 Input", ""),
    }


def call_grok(prompt: str, l3_input: str) -> str:
    """Call Grok with the given prompt + L3 input."""
    messages = [
        {"role": "system", "content": prompt},
        {"role": "user", "content": f"L3 Input:\n\n{l3_input}"}
    ]

    response = client.chat.completions.create(
        model=MODEL,
        messages=messages,
        temperature=0.7,
        max_tokens=4000,
    )
    return response.choices[0].message.content.strip()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--prompt", type=Path, required=True, help="Path to the prompt variant to evaluate")
    parser.add_argument("--test-cases", type=Path, default=Path("test_cases"), help="Folder containing test cases")
    args = parser.parse_args()

    prompt_path = args.prompt.resolve()
    test_cases_dir = args.test_cases.resolve()

    print(f"Loading prompt: {prompt_path.name}")
    prompt = load_prompt(prompt_path)

    test_case_files = sorted(test_cases_dir.glob("*.md"))
    print(f"Found {len(test_case_files)} test cases.\n")

    results_dir = Path("evaluations") / prompt_path.stem / datetime.now().strftime("%Y-%m-%d_%H%M%S")
    results_dir.mkdir(parents=True, exist_ok=True)

    for tc_file in test_case_files:
        print(f"Running: {tc_file.name}")
        tc = load_test_case(tc_file)

        if not tc["l3_input"]:
            print("  → Skipping (no L3 Input found)")
            continue

        output = call_grok(prompt, tc["l3_input"])

        output_file = results_dir / f"{tc_file.stem}.md"
        output_file.write_text(output, encoding="utf-8")
        print(f"  → Saved to {output_file}\n")

    print(f"\nAll outputs saved to: {results_dir}")
    print("Next: Review the outputs and score them using the rubric.")


if __name__ == "__main__":
    main()