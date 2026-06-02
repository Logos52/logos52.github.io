import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const JournalNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <nav class={classNames(displayClass, "journal-panel journal-nav-panel")}>
      <h3>Journal</h3>
      <a href={`${baseDir}/journal`}>Overview</a>
      <a href={`${baseDir}/journal#active-threads`}>Active threads</a>
      <a href={`${baseDir}/journal#recent-entries`}>Recent entries</a>
      <a href={`${baseDir}/journal#possible-posts-and-paths`}>Possible posts</a>
      <a href={`${baseDir}/journal/calendar`}>Calendar</a>
    </nav>
  )
}

export default (() => JournalNav) satisfies QuartzComponentConstructor
