import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'

type QA = { q: string; a: string }

export default function FAQ() {
  const { t, tRaw } = useI18n()
  const items = tRaw<QA[]>('faq.items') ?? []
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="faq" className="sc-section">
      <div className="sc-section-head">
        <span className="sc-eyebrow">{t('faq.eyebrow')}</span>
        <h2 className="sc-h2">{t('faq.heading')}</h2>
      </div>

      <div className="sc-faq-grid">
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <button
              key={i}
              className={`sc-faq-item ${isOpen ? 'is-open' : ''}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <div className="sc-faq-head">
                <span className="sc-faq-num">Q{(i + 1).toString().padStart(2, '0')}</span>
                <span className="sc-faq-q">{item.q}</span>
                <span className="sc-faq-toggle">{isOpen ? '–' : '+'}</span>
              </div>
              {isOpen && <div className="sc-faq-a sc-p">{item.a}</div>}
            </button>
          )
        })}
      </div>
    </section>
  )
}
