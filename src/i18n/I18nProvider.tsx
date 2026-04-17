import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import rawConfig from './config.json'

export type LangConfig = {
  code: string
  label: string
  flag: string
  file?: string
}

export type I18nConfig = {
  default: string
  fallback: string
  crowdinUrl: string
  languages: LangConfig[]
}

export const config = rawConfig as I18nConfig

export type Dictionary = { [key: string]: string | Dictionary | Dictionary[] }

// Eagerly import every JSON file in src/langs so they get bundled at build time.
// Keys look like '../langs/en.json' — we normalize to just the filename.
const langModules = import.meta.glob<{ default: Dictionary }>('../langs/*.json', { eager: true })
const dictionaries: Record<string, Dictionary> = {}
for (const [path, mod] of Object.entries(langModules)) {
  const filename = path.split('/').pop()
  if (filename) dictionaries[filename] = (mod as { default: Dictionary }).default
}

type I18nContextType = {
  locale: string
  setLocale: (code: string) => void
  t: (key: string, vars?: Record<string, string>) => string
  tRaw: <T = unknown>(key: string) => T
  config: I18nConfig
  isAvailable: (code: string) => boolean
  availableLanguages: LangConfig[]
  unavailableLanguages: LangConfig[]
  notifyUnavailable: (code: string) => void
  pendingUnavailable: LangConfig | null
  dismissUnavailable: () => void
}

const I18nContext = createContext<I18nContextType | null>(null)

const STORAGE_KEY = 'sc-locale'

function readStoredLocale(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && config.languages.some((l) => l.code === stored && l.file && dictionaries[l.file])) {
      return stored
    }
  } catch {
    /* noop */
  }
  return config.default
}

function resolveKey(dict: Dictionary | undefined, key: string): unknown {
  if (!dict) return undefined
  const parts = key.split('.')
  let cur: unknown = dict
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p]
    } else {
      return undefined
    }
  }
  return cur
}

function interpolate(str: string, vars?: Record<string, string>): string {
  if (!vars) return str
  return str.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`))
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<string>(() => readStoredLocale())
  const [pendingUnavailable, setPendingUnavailable] = useState<LangConfig | null>(null)

  const availableLanguages = useMemo(
    () => config.languages.filter((l) => l.file && dictionaries[l.file]),
    [],
  )
  const unavailableLanguages = useMemo(
    () => config.languages.filter((l) => !l.file || !dictionaries[l.file]),
    [],
  )

  const isAvailable = (code: string) => availableLanguages.some((l) => l.code === code)

  const setLocale = (code: string) => {
    if (!isAvailable(code)) {
      const cfg = config.languages.find((l) => l.code === code)
      if (cfg) setPendingUnavailable(cfg)
      return
    }
    setLocaleState(code)
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {
      /* noop */
    }
    if (typeof document !== 'undefined') document.documentElement.lang = code
  }

  const notifyUnavailable = (code: string) => {
    const cfg = config.languages.find((l) => l.code === code)
    if (cfg) setPendingUnavailable(cfg)
  }

  const dismissUnavailable = () => setPendingUnavailable(null)

  const activeDict = useMemo(() => {
    const active = config.languages.find((l) => l.code === locale)
    if (active?.file && dictionaries[active.file]) return dictionaries[active.file]
    return dictionaries[config.languages.find((l) => l.code === config.fallback)?.file ?? 'en.json']
  }, [locale])

  const fallbackDict = useMemo(() => {
    const fb = config.languages.find((l) => l.code === config.fallback)
    return fb?.file ? dictionaries[fb.file] : undefined
  }, [])

  const t = (key: string, vars?: Record<string, string>): string => {
    const val = resolveKey(activeDict, key) ?? resolveKey(fallbackDict, key)
    if (typeof val === 'string') return interpolate(val, vars)
    return key
  }

  const tRaw = <T = unknown,>(key: string): T => {
    const val = resolveKey(activeDict, key) ?? resolveKey(fallbackDict, key)
    return val as T
  }

  const value: I18nContextType = {
    locale,
    setLocale,
    t,
    tRaw,
    config,
    isAvailable,
    availableLanguages,
    unavailableLanguages,
    notifyUnavailable,
    pendingUnavailable,
    dismissUnavailable,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}
