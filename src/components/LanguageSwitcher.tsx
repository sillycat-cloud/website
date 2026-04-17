import { useEffect, useRef, useState } from 'react'

type Lang = { code: string; label: string; flag: string }

const LANGS: Lang[] = [
  { code: 'en',    label: 'English',    flag: '🇺🇸' },
  { code: 'es',    label: 'Español',    flag: '🇪🇸' },
  { code: 'fr',    label: 'Français',   flag: '🇫🇷' },
  { code: 'de',    label: 'Deutsch',    flag: '🇩🇪' },
  { code: 'it',    label: 'Italiano',   flag: '🇮🇹' },
  { code: 'pt',    label: 'Português',  flag: '🇵🇹' },
  { code: 'nl',    label: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl',    label: 'Polski',     flag: '🇵🇱' },
  { code: 'ru',    label: 'Русский',    flag: '🇷🇺' },
  { code: 'tr',    label: 'Türkçe',     flag: '🇹🇷' },
  { code: 'ja',    label: '日本語',      flag: '🇯🇵' },
  { code: 'ko',    label: '한국어',      flag: '🇰🇷' },
  { code: 'zh-CN', label: '简体中文',   flag: '🇨🇳' },
  { code: 'hi',    label: 'हिन्दी',        flag: '🇮🇳' },
  { code: 'ar',    label: 'العربية',      flag: '🇸🇦' },
]

function readCurrentLang(): string {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/)
  return match ? decodeURIComponent(match[1]) : 'en'
}

function setLang(code: string) {
  const expire = 'path=/; max-age=31536000'
  if (code === 'en') {
    document.cookie = `googtrans=; ${expire}`
    document.cookie = `googtrans=; domain=.sillycat.cloud; ${expire}`
    document.cookie = `googtrans=; domain=${window.location.hostname}; ${expire}`
  } else {
    document.cookie = `googtrans=/en/${code}; ${expire}`
    document.cookie = `googtrans=/en/${code}; domain=.sillycat.cloud; ${expire}`
    document.cookie = `googtrans=/en/${code}; domain=${window.location.hostname}; ${expire}`
  }
  window.location.reload()
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<string>('en')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrent(readCurrentLang())
  }, [])

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

  const active = LANGS.find((l) => l.code === current) ?? LANGS[0]

  return (
    <div className="sc-lang" ref={ref} translate="no">
      <button
        className="sc-lang-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span className="sc-lang-flag" aria-hidden>{active.flag}</span>
        <span className="sc-lang-code">{active.code.toUpperCase()}</span>
        <span className="sc-lang-caret" aria-hidden>▾</span>
      </button>
      {open && (
        <div className="sc-lang-menu" role="listbox">
          <div className="sc-lang-menu-head">language</div>
          {LANGS.map((l) => {
            const isActive = l.code === current
            return (
              <button
                key={l.code}
                role="option"
                aria-selected={isActive}
                className={`sc-lang-opt ${isActive ? 'is-active' : ''}`}
                onClick={() => setLang(l.code)}
              >
                <span className="sc-lang-flag" aria-hidden>{l.flag}</span>
                <span className="sc-lang-opt-label">{l.label}</span>
                <span className="sc-lang-opt-code">{l.code}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
