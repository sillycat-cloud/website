import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'

export default function LanguageSwitcher() {
  const { locale, setLocale, notifyUnavailable, isAvailable, config, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const active = config.languages.find((l) => l.code === locale) ?? config.languages[0]

  const pick = (code: string) => {
    if (isAvailable(code)) {
      setLocale(code)
    } else {
      notifyUnavailable(code)
    }
    setOpen(false)
  }

  return (
    <div className="sc-lang" ref={ref}>
      <button
        className="sc-lang-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.langAriaLabel')}
      >
        <span className="sc-lang-flag" aria-hidden>{active.flag}</span>
        <span className="sc-lang-code">{active.code.toUpperCase()}</span>
        <span className="sc-lang-caret" aria-hidden>▾</span>
      </button>
      {open && (
        <div className="sc-lang-menu" role="listbox">
          <div className="sc-lang-menu-head">{t('lang.menuHead')}</div>
          {config.languages.map((l) => {
            const isActive = l.code === locale
            const available = isAvailable(l.code)
            return (
              <button
                key={l.code}
                role="option"
                aria-selected={isActive}
                className={`sc-lang-opt ${isActive ? 'is-active' : ''} ${available ? '' : 'is-unavailable'}`}
                onClick={() => pick(l.code)}
                title={available ? undefined : 'not translated yet'}
              >
                <span className="sc-lang-flag" aria-hidden>{l.flag}</span>
                <span className="sc-lang-opt-label">{l.label}</span>
                <span className="sc-lang-opt-code">{available ? l.code : 'WIP'}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
