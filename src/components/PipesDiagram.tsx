import { Fragment } from 'react'

type Node = { k: string; label: string; sub: string }

const nodes: Node[] = [
  { k: 'you',    label: 'you',          sub: 'upload a file' },
  { k: 'anubis', label: 'anubis',       sub: 'are you a scraper?' },
  { k: 'cf',     label: 'cloudflare',   sub: 'some cloudflare stuff' },
  { k: 'pi',     label: 'raspberry pi', sub: 'sitting on my desk' },
  { k: 'back',   label: 'back to you',  sub: 'with any luck' },
]

export default function PipesDiagram() {
  return (
    <section id="pipes" className="sc-section">
      <div className="sc-section-head">
        <span className="sc-eyebrow">HOW IT (WILL) WORK</span>
        <h2 className="sc-h2">the file goes through some pipes.</h2>
        <p className="sc-p sc-section-lede">
          nothing here is production yet. this is what i'm building.
        </p>
      </div>

      <div className="sc-pipes">
        {nodes.map((n, i) => (
          <Fragment key={n.k}>
            <div className={`sc-pipe-node sc-pipe-${n.k}`}>
              <div className="sc-pipe-label">{n.label}</div>
              <div className="sc-pipe-sub">{n.sub}</div>
            </div>
            {i < nodes.length - 1 && <div className="sc-pipe-arrow">→</div>}
          </Fragment>
        ))}
      </div>

      <p className="sc-p sc-pipes-foot">
        game-server hosting is basically the same, except there's no anubis and it uses pterodactyl.
        might swap pterodactyl for something i wrote myself, haven't decided.
      </p>
    </section>
  )
}
