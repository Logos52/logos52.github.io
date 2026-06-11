import { execSync } from "node:child_process"
import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const outPath = join(root, "quartz/components/ledgerData.json")

function classify(subject) {
  const head = subject.split(":")[0].replace(/\([^)]*\)/g, "").trim().toLowerCase()
  switch (head) {
    case "wiki":
      return "wiki expansion"
    case "journal":
      return "journal entry"
    case "projects":
      return "projects"
    case "blog":
      return "essays"
    case "fix":
    case "chore":
    case "atlas":
      return "site maintenance"
    default:
      return "maintenance"
  }
}

function parseGitLog(raw) {
  const days = new Map()

  let current = null
  for (const line of raw.split("\n")) {
    if (!line.trim()) {
      current = null
      continue
    }
    if (line.includes("|") && !line.includes("/") && /^\d{4}-\d{2}-\d{2}\|/.test(line)) {
      const [date, subject] = line.split("|", 2)
      current = { date, subject, files: new Set() }
      if (!days.has(date)) {
        days.set(date, { commits: [], files: new Set() })
      }
      days.get(date).commits.push(current)
      continue
    }
    if (current && line.endsWith(".md")) {
      current.files.add(line.trim())
      days.get(current.date).files.add(line.trim())
    }
  }

  return days
}

function main() {
  let raw = ""
  try {
    raw = execSync("git log --since=60.days --pretty=format:'%as|%s' --name-only", {
      encoding: "utf8",
      cwd: root,
    })
  } catch {
    writeFileSync(outPath, "[]\n")
    return
  }

  const days = parseGitLog(raw)
  const rows = [...days.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .slice(0, 2)
    .map(([date, info]) => {
      const counts = new Map()
      for (const commit of info.commits) {
        const label = classify(commit.subject)
        counts.set(label, (counts.get(label) ?? 0) + 1)
      }
      let label = "maintenance"
      let max = 0
      for (const [k, v] of counts) {
        if (v > max) {
          max = v
          label = k
        }
      }
      return { date, label, pages: info.files.size }
    })

  writeFileSync(outPath, JSON.stringify(rows, null, 2) + "\n")
}

main()