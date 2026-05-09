import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const JournalContext: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <aside class={classNames(displayClass, "journal-panel journal-context-panel")}>
      <section>
        <h3>Now</h3>
        <ul>
          <li>Balance active interests without losing focus.</li>
          <li>Use the knowledge base as a thinking partner.</li>
          <li>Keep private logs private.</li>
        </ul>
      </section>
      <section>
        <h3>Log</h3>
        <ul>
          <li>
            <a href={`${baseDir}/journal/calendar#2026-05-09`}>2026-05-09</a>
          </li>
          <li>
            <a href={`${baseDir}/journal/calendar#2026-05-08`}>2026-05-08</a>
          </li>
          <li>
            <a href={`${baseDir}/journal/calendar#2026-05-07`}>2026-05-07</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Time Log</h3>
        <p>Reserved for public work-session notes. Private time tracking stays local.</p>
      </section>
      <section>
        <h3>Private Tools</h3>
        <ul>
          <li>
            <a href={`${baseDir}/journal/templates/goals-index`}>Goals</a>
          </li>
          <li>
            <a href={`${baseDir}/journal/templates/skills-index`}>Skills</a>
          </li>
          <li>
            <a href={`${baseDir}/journal/templates/kolbs-index`}>Kolbs</a>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default (() => JournalContext) satisfies QuartzComponentConstructor
