import { useState } from 'react'

export default function DiscordCTA() {
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
          <span className="sc-eyebrow">UPDATES · MEMES · SHOUTING AT BUGS</span>
          <h2 className="sc-h2">join the discord. it's mostly me.</h2>
          <p className="sc-p">
            if you want updates before i email people, or want to watch me figure out
            what a reverse proxy is in real time, the discord's where that happens.
          </p>
          <div className="sc-cta-row">
            <a
              className="sc-btn sc-btn-lime"
              href="https://discord.gg/sZxmbu4ZrG"
              target="_blank"
              rel="noreferrer"
            >
              Join the Discord
            </a>
            <button className="sc-btn sc-btn-ghost" onClick={copy}>
              {copied ? 'copied ✓' : 'copy invite'}
            </button>
          </div>
        </div>
        <div className="sc-discord-side">
          <div className="sc-bdg-lime">● online · 12</div>
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
