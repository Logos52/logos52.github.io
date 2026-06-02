import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const navItems = [
  { href: "blog", label: "Blog", match: "blog" },
  { href: "journal", label: "Journal", match: "journal" },
  { href: "projects", label: "Projects", match: "projects" },
  { href: "notes", label: "Index", match: "notes" },
  { href: "about", label: "About", match: "about" },
]

const SiteNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const slug = fileData.slug ?? ""

  return (
    <nav class="site-nav">
      {navItems.map((item) => {
        const active = slug === item.match || slug.startsWith(item.match + "/")
        return (
          <a class={active ? "active" : undefined} href={`${baseDir}/${item.href}`}>
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
  margin: 0 0 1.25rem 0;
  font-family: var(--headerFont);
  font-size: 0.95rem;
}

.site-nav a {
  color: var(--darkgray);
  text-decoration: none;
}

.site-nav a:hover {
  color: var(--secondary);
}

.site-nav a.active {
  color: var(--secondary);
  font-weight: 600;
}
`

export default (() => SiteNav) satisfies QuartzComponentConstructor
