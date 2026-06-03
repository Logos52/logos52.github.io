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
        <h3>Recent</h3>
        <ul>
          <li>
            <a href={`${baseDir}/journal/2026-06-02-front-facing-redesign`}>2026-06-02</a>
          </li>
          <li>
            <a href={`${baseDir}/journal/2026-05-28-Reflections-on-Wiki-Bloat-Life-OS-Red-Teaming-and-Agentic-Focus`}>2026-05-28</a>
          </li>
          <li>
            <a href={`${baseDir}/journal/calendar#2026-05-21`}>2026-05-21</a>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default (() => JournalContext) satisfies QuartzComponentConstructor
