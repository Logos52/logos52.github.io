import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"
import { classNames } from "../util/lang"

/**
 * ProjectsGallery — renders the /projects landing as a card grid.
 *
 * Data-driven: every page under `projects/` with `type: project` in its
 * frontmatter becomes a card automatically. Add a project page, get a card.
 * Frontmatter read per project:
 *   title, status (current|past), blurb (or description), stack: [..], order.
 *   Screenshots live on each project page (image frontmatter), not on the gallery cards.
 */

type Status = "current" | "past"

const ProjectsGallery: QuartzComponent = (props: QuartzComponentProps) => {
  const { allFiles, fileData, displayClass } = props
  const here = fileData.slug!

  const projects = allFiles
    .filter((f) => {
      const s = f.slug ?? ""
      return s.startsWith("projects/") && s !== "projects/index" && f.frontmatter?.type === "project"
    })
    .map((f) => {
      const fm = (f.frontmatter ?? {}) as Record<string, any>
      const rawStatus = String(fm.status ?? "current").toLowerCase()
      const status: Status =
        rawStatus.startsWith("current") || rawStatus.startsWith("active") ? "current" : "past"
      const stack = Array.isArray(fm.stack) ? fm.stack.map(String) : fm.stack ? [String(fm.stack)] : []
      const order = typeof fm.order === "number" ? fm.order : 99
      return {
        slug: f.slug!,
        title: String(fm.title ?? f.slug),
        blurb: String(fm.blurb ?? fm.description ?? ""),
        status,
        stack,
        order,
      }
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))

  const groups: { key: Status; label: string }[] = [
    { key: "current", label: "Current" },
    { key: "past", label: "Archived" },
  ]

  return (
    <div class={classNames(displayClass, "projects-gallery")}>
      {groups.map((g) => {
        const items = projects.filter((p) => p.status === g.key)
        if (items.length === 0) return null
        return (
          <section class="projects-group">
            <h2 class="projects-group-head">{g.label}</h2>
            <div class="projects-grid">
              {items.map((p) => (
                <a
                  class={`project-card project-${p.status}`}
                  href={resolveRelative(here, p.slug as SimpleSlug)}
                >
                  <h3 class="project-card-title">{p.title}</h3>
                  <p class="project-card-blurb">{p.blurb}</p>
                  {p.stack.length > 0 && (
                    <div class="project-card-stack">
                      {p.stack.map((s) => (
                        <span class="project-tag">{s}</span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

ProjectsGallery.css = `
.projects-gallery { margin-top: 0.5rem; }

.projects-group { margin: 0 0 2.5rem; }

.projects-group-head {
  margin: 0 0 1.1rem;
  font-size: 1.3rem;
  border-bottom: 1px solid var(--lightgray);
  padding-bottom: 0.4rem;
}

.projects-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--lightgray);
  border-radius: 0.6rem;
  padding: 1rem 1.1rem;
  background: var(--light);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}
.project-card:hover {
  border-color: var(--secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
}

.project-card-title { margin: 0; font-size: 1.1rem; color: var(--secondary); }
.project-card-blurb { margin: 0; font-size: 0.9rem; line-height: 1.45; color: var(--darkgray); }

.project-card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: auto;
  padding-top: 0.5rem;
}
.project-tag {
  font-family: var(--codeFont);
  font-size: 0.68rem;
  color: var(--gray);
  border: 1px solid var(--lightgray);
  border-radius: 0.3rem;
  padding: 0.05rem 0.4rem;
}
`

export default (() => ProjectsGallery) satisfies QuartzComponentConstructor
