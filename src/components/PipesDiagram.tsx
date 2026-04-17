import { Fragment } from 'react'
import { useI18n } from '../i18n/I18nProvider'

const NODE_KEYS = ['you', 'anubis', 'cf', 'pi', 'back'] as const
type NodeKey = typeof NODE_KEYS[number]
type NodeCopy = { label: string; sub: string }

export default function PipesDiagram() {
  const { t, tRaw } = useI18n()

  return (
    <section id="pipes" className="sc-section">
      <div className="sc-section-head">
        <span className="sc-eyebrow">{t('pipes.eyebrow')}</span>
        <h2 className="sc-h2">{t('pipes.heading')}</h2>
        <p className="sc-p sc-section-lede">{t('pipes.lede')}</p>
      </div>

      <div className="sc-pipes">
        {NODE_KEYS.map((k: NodeKey, i) => {
          const node = tRaw<NodeCopy>(`pipes.nodes.${k}`)
          return (
            <Fragment key={k}>
              <div className={`sc-pipe-node sc-pipe-${k}`}>
                <div className="sc-pipe-label">{node?.label ?? k}</div>
                <div className="sc-pipe-sub">{node?.sub ?? ''}</div>
              </div>
              {i < NODE_KEYS.length - 1 && <div className="sc-pipe-arrow">→</div>}
            </Fragment>
          )
        })}
      </div>

      <p className="sc-p sc-pipes-foot">{t('pipes.foot')}</p>
    </section>
  )
}
