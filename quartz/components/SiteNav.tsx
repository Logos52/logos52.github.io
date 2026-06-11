import { resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const navItems = [
  { slug: "index" as const, label: "Map" },
  { slug: "notes" as const, label: "Notes" },
  { slug: "projects" as const, label: "Projects" },
  { slug: "journal" as const, label: "Journal" },
  { slug: "about" as const, label: "About" },
]

const SiteNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  const homeHref = resolveRelative(slug, "index")

  return (
    <nav class="site-nav" aria-label="Site">
      <a class="site-wordmark" href={homeHref}>
        Logos52
      </a>
      {navItems.map((item) => {
        const active =
          slug === item.slug ||
          (item.slug !== "index" && slug.startsWith(item.slug + "/"))
        const href =
          item.slug === "index"
            ? homeHref
            : resolveRelative(slug, item.slug)
        return (
          <a class={active ? "active" : undefined} href={href}>
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}

SiteNav.css = `
.site-nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  font-family: var(--codeFont);
  font-size: 12px;
  letter-spacing: 0.04em;
}

.site-wordmark {
  font-family: var(--headerFont);
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--dark);
  text-decoration: none;
  margin-right: 0.35rem;
}

.site-wordmark:hover {
  color: var(--secondary);
}

.site-nav a:not(.site-wordmark) {
  color: var(--gray);
  text-decoration: none;
}

.site-nav a:not(.site-wordmark):hover {
  color: var(--secondary);
}

.site-nav a.active:not(.site-wordmark) {
  color: var(--secondary);
}
`

export default (() => SiteNav) satisfies QuartzComponentConstructor