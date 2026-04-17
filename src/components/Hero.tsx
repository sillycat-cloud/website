import { useState } from 'react'
import { Turnstile } from 'react-turnstile'
import { motion } from 'motion/react'
import { useTheme } from '../hooks/useTheme'
import piskelCat from '../assets/piskel-cat.png'

export default function Hero() {
  const { isDark } = useTheme()
  const [token, setToken] = useState('')
  const [joined, setJoined] = useState(false)

  const handleJoinWaitlist = () => {
    if (!token) {
      alert('Please complete the challenge first.')
      console.log("YOU didnt complete the challange!!11!1! (no waitlist for u until completion >:DD)")
      return
    }
    // tally handles the real submit via data-tally-open; we flip joined after click
    setJoined(true)
  }

  return (
    <section className="sc-hero">
      <div className="sc-hero-bg" />
      <div className="sc-hero-inner">
        <div className="sc-hero-copy">
          <span className="sc-eyebrow">SILLYCAT CLOUD · v0.2 · HEAVY WIP</span>
          <h1 className="sc-h1 sc-hero-title">
            a <span className="sc-underline">silly</span> cloud<br />
            built by one person<br />
            with a <em>headache</em>.
          </h1>
          <p className="sc-lede sc-hero-lede">
            files go through anubis, then some cloudflare stuff, then land on a raspberry pi sitting
            on my desk. somehow they come back. that's the whole pitch. not AI-generated (mostly).
          </p>

          {joined ? (
            <div className="sc-waitlist-done">
              <img src={piskelCat} alt="" className="sc-mascot-mini" />
              <div>
                <b>you're on the list.</b>
                <div className="sc-p" style={{ margin: 0 }}>
                  i'll email you when things are slightly less broken. thank you for tolerating me.
                </div>
              </div>
            </div>
          ) : (
            <div className="sc-waitlist">
              <span className="sc-eyebrow">verify + join</span>
              <div className="sc-turnstile-wrap">
                <Turnstile
                  sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '3x00000000000000000000FF'}
                  onVerify={(t) => setToken(t)}
                  onExpire={() => setToken('')}
                  theme={isDark ? 'dark' : 'light'}
                  appearance="interaction-only"
                  refreshExpired="auto"
                />
              </div>

              <div className="sc-cta-row">
                <motion.button
                  whileHover={token ? { scale: 1.04 } : undefined}
                  whileTap={token ? { scale: 0.96 } : undefined}
                  className="sc-btn sc-btn-primary"
                  data-tally-open={token ? 'pbBx1b' : undefined}
                  onClick={handleJoinWaitlist}
                  disabled={!token}
                >
                  Join Waitlist
                </motion.button>
                <span className="sc-p sc-cta-note">
                  {token ? 'good to go >:DD' : 'solve the challange first or no waitlist for u'}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="sc-hero-mascot">
          <div className="sc-hero-card">
            <span className="sc-eyebrow">CURRENT STATUS</span>
            <div className="sc-status-list">
              <div className="sc-status"><span className="sc-dot sc-dot-lime" />website: up</div>
              <div className="sc-status"><span className="sc-dot sc-dot-yellow" />file hosting: WIP</div>
              <div className="sc-status"><span className="sc-dot sc-dot-yellow" />game servers: WIP</div>
              <div className="sc-status"><span className="sc-dot sc-dot-rose" />sleep: broken</div>
            </div>
          </div>
          <img src={piskelCat} alt="pixel cat mascot" className="sc-hero-cat" />
        </div>
      </div>
    </section>
  )
}
