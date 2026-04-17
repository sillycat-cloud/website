import { useState } from 'react'

const QA = [
  {
    q: 'What is Silly Cat Cloud?',
    a: "a very silly, cat-related cloud provider/service, i guess. i was randomly bored one day and thought about making a silly cloud provider. here we are.",
  },
  {
    q: 'Is it going to be any good?',
    a: "so far it isnt finished at all, so i really don't know yet. it's my first ever big project so i don't really know what im doing sometimes. but it'll be the best i can do i guess.",
  },
  {
    q: 'Is it going to be free?',
    a: "most probably. i don't really like paywalls since most of the time they're very expensive. so i'll do what i can do with free tiers i guess (except for the domain of course).",
  },
  {
    q: 'Did you work the entire day writting this?',
    a: 'yes, and i have a headache.',
  },
  {
    q: 'When will it be released?',
    a: 'either when i have time, or whenever i say in the waitlist email. whichever is later, probably.',
  },
  {
    q: "why's it called sillycat",
    a: "because the original PFP is from soggy.cat and it is, objectively, a silly cat. we modified it for light/dark mode and added a blurred halo for light. that's the extent of the branding exercise.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number>(0)
  return (
    <section id="faq" className="sc-section">
      <div className="sc-section-head">
        <span className="sc-eyebrow">FAQ</span>
        <h2 className="sc-h2">frequently-ish asked questions.</h2>
      </div>

      <div className="sc-faq-grid">
        {QA.map((item, i) => {
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
