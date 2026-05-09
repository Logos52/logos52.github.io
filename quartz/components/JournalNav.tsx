import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const JournalNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <nav class={classNames(displayClass, "journal-panel journal-nav-panel")}>
      <h3>Journal</h3>
      <a href={`${baseDir}/journal`}>Dashboard</a>
      <a href={`${baseDir}/journal/calendar`}>Calendar</a>
      <a href={`${baseDir}/journal#active-threads`}>Active Threads</a>
      <a href={`${baseDir}/journal#possible-blog-posts`}>Blog Candidates</a>
      <a href={`${baseDir}/journal#private-workflow-templates`}>Private Templates</a>
      <a href={`${baseDir}/journal/templates/goals-index`}>Goals</a>
      <a href={`${baseDir}/journal/templates/skills-index`}>Skills</a>
      <a href={`${baseDir}/journal/templates/kolbs-index`}>Kolbs</a>
      <a href={`${baseDir}/journal#rituals--review-prompts`}>Review Prompts</a>
    </nav>
  )
}

export default (() => JournalNav) satisfies QuartzComponentConstructor
