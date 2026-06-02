import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, pathToRoot, SimpleSlug } from "../util/path"
import { classNames } from "../util/lang"

/**
 * ProjectsGallery — renders the /projects landing as a card grid.
 *
 * Data-driven: every page under `projects/` with `type: project` in its
 * frontmatter becomes a card automatically. Add a project page, get a card.
 * Frontmatter read per project:
 *   title, status (current|past), blurb (or description), stack: [..], order
 */

type Status = "current" | "past"

const ProjectsGallery: QuartzComponent = (props: QuartzComponentProps) => {
  const { allFiles, fileData, displayClass } = props
  const here = fileData.slug!
  const root = pathToRoot(here)

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
        statusLabel: String(fm.status ?? "current"),
        status,
        stack,
        order,
        image: fm.image ? String(fm.image) : "",
      }
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))

  const groups: { key: Status; label: string; note: string }[] = [
    { key: "current", label: "Building now", note: "Active projects." },
    {
      key: "past",
      label: "Archived",
      note: "Earlier builds — what they were, why they ended, and the lesson that carried forward.",
    },
  ]

  return (
    <div class={classNames(displayClass, "projects-gallery")}>
      {groups.map((g) => {
        const items = projects.filter((p) => p.status === g.key)
        if (items.length === 0) return null
        return (
          <section class="projects-group">
            <div class="projects-group-head">
              <h2>{g.label}</h2>
              <span class="projects-group-note">{g.note}</span>
            </div>
            <div class="projects-grid">
              {items.map((p) => (
                <a
                  class={`project-card project-${p.status}`}
                  href={resolveRelative(here, p.slug as SimpleSlug)}
                >
                  {p.image && (
                    <div class="project-card-media">
                      <img src={`${root}/${p.image}`} alt={`${p.title} screenshot`} loading="lazy" />
                    </div>
                  )}
                  <div class="project-card-top">
                    <span class={`project-status project-status-${p.status}`}>{p.statusLabel}</span>
                  </div>
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
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--lightgray);
  padding-bottom: 0.4rem;
  margin-bottom: 1.1rem;
}
.projects-group-head h2 { margin: 0; font-size: 1.3rem; }
.projects-group-note { color: var(--gray); font-size: 0.85rem; }

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

.project-card-media {
  margin: -1rem -1.1rem 0.35rem;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0.55rem 0.55rem 0 0;
  background: var(--lightgray);
  border-bottom: 1px solid var(--lightgray);
}
.project-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.project-card-top { display: flex; }
.project-status {
  font-family: var(--codeFont);
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.12rem 0.5rem;
  border-radius: 1rem;
}
.project-status-current {
  color: var(--tertiary);
  background: color-mix(in srgb, var(--tertiary) 15%, transparent);
}
.project-status-past {
  color: var(--gray);
  background: color-mix(in srgb, var(--gray) 16%, transparent);
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
