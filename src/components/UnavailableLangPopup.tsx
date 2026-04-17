import { useEffect } from 'react'
import { useI18n } from '../i18n/I18nProvider'

export default function UnavailableLangPopup() {
  const { pendingUnavailable, dismissUnavailable, config, t, locale, availableLanguages } = useI18n()

  useEffect(() => {
    if (!pendingUnavailable) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismissUnavailable()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [pendingUnavailable, dismissUnavailable])

  if (!pendingUnavailable) return null

  const currentLabel = availableLanguages.find((l) => l.code === locale)?.label ?? locale

  return (
    <div className="sc-modal-overlay" role="dialog" aria-modal="true" onClick={dismissUnavailable}>
      <div className="sc-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sc-modal-flag" aria-hidden>{pendingUnavailable.flag}</div>
        <span className="sc-eyebrow">
          {pendingUnavailable.label.toUpperCase()} · {pendingUnavailable.code.toUpperCase()}
        </span>
        <h2 className="sc-h2 sc-modal-title">{t('lang.unavailableTitle')}</h2>
        <p className="sc-p sc-modal-body">
          {t('lang.unavailableBody', { current: currentLabel })}
        </p>
        <div className="sc-modal-actions">
          <a
            className="sc-btn sc-btn-lime"
            href={config.crowdinUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t('lang.unavailableContribute')}
          </a>
          <button className="sc-btn sc-btn-ghost" onClick={dismissUnavailable}>
            {t('lang.unavailableDismiss')}
          </button>
        </div>
      </div>
    </div>
  )
}
