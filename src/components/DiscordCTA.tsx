import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'

export default function DiscordCTA() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText('https://discord.gg/sZxmbu4ZrG')
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }
  return (
    <section className="sc-section">
      <div className="sc-discord-card">
        <div className="sc-discord-copy">
          <span className="sc-eyebrow">{t('discord.eyebrow')}</span>
          <h2 className="sc-h2">{t('discord.heading')}</h2>
          <p className="sc-p">{t('discord.body')}</p>
          <div className="sc-cta-row">
            <a
              className="sc-btn sc-btn-lime"
              href="https://discord.gg/sZxmbu4ZrG"
              target="_blank"
              rel="noreferrer"
            >
              {t('discord.cta')}
            </a>
            <button className="sc-btn sc-btn-ghost" onClick={copy}>
              {copied ? t('discord.copied') : t('discord.copyInvite')}
            </button>
          </div>
        </div>
        <div className="sc-discord-side">
          <div className="sc-bdg-lime">{t('discord.online')}</div>
          <div className="sc-discord-channels">
            <div># general</div>
            <div># bug-watch</div>
            <div># cat-pics</div>
            <div># is-it-broken</div>
          </div>
        </div>
      </div>
    </section>
  )
}
