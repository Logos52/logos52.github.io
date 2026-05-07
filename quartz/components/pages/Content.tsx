import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { toString } from "hast-util-to-string"

function normalizeTitle(text: string) {
  return text.trim().toLowerCase().replace(/\s+/g, " ")
}

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const pageTitle = normalizeTitle(String(fileData.frontmatter?.title ?? ""))
  const firstElementIndex = tree.children.findIndex((child) => child.type === "element")
  const firstElement = tree.children[firstElementIndex]

  if (
    firstElement?.type === "element" &&
    firstElement.tagName === "h1" &&
    normalizeTitle(toString(firstElement)) === pageTitle
  ) {
    tree.children.splice(firstElementIndex, 1)
  }

  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{content}</article>
}

export default (() => Content) satisfies QuartzComponentConstructor
