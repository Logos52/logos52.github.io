import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const SiteNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <nav class="site-nav">
      <a href={`${baseDir}/blog`}>Blog</a>
      <a href={`${baseDir}/notes`}>Index</a>
      <a href={`${baseDir}/about`}>About</a>
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
`

export default (() => SiteNav) satisfies QuartzComponentConstructor
