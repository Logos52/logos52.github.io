import { colorOf } from "../domains"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const DomainAccent: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  if (!slug.startsWith("wiki/")) return null
  const color = colorOf(slug)
  return <div class="domain-accent-rule" style={{ borderColor: color }} />
}

DomainAccent.css = `
.domain-accent-rule {
  border: none;
  border-bottom: 2px solid var(--secondary);
  margin: 0.65rem 0 0.85rem;
}
`

export default (() => DomainAccent) satisfies QuartzComponentConstructor