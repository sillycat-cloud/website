import piskelCat from '../assets/piskel-cat.png'

export function PfpCredit() {
  return (
    <div className="sc-pfp-credit">
      <span className="sc-eyebrow">PFP CREDIT</span>
      <p className="sc-p" style={{ margin: 0 }}>
        the original cat is from{' '}
        <a className="sc-link" href="https://soggy.cat" target="_blank" rel="noreferrer">
          soggy.cat
        </a>
        . we made a light/dark version and gave it a soft blurred halo on light mode. that's it.
        that's the remix.
      </p>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="sc-footer">
      <img src={piskelCat} alt="" className="sc-footer-cat" />
      <div className="sc-footer-cols">
        <div className="sc-footer-col">
          <span className="sc-eyebrow">SILLYCAT.CLOUD</span>
          <p className="sc-p" style={{ margin: '6px 0 0' }}>
            made with headaches by one person. hosted on a raspberry pi on a desk.
          </p>
        </div>
        <div className="sc-footer-col">
          <span className="sc-eyebrow">LINKS</span>
          <a className="sc-link" href="https://github.com/sillycat-cloud" target="_blank" rel="noreferrer">github</a>
          <a className="sc-link" href="https://discord.gg/sZxmbu4ZrG" target="_blank" rel="noreferrer">discord</a>
          <a className="sc-link" href="https://soggy.cat" target="_blank" rel="noreferrer">soggy.cat (pfp)</a>
        </div>
        <div className="sc-footer-col">
          <span className="sc-eyebrow">STATUS</span>
          <div className="sc-p" style={{ margin: '6px 0 0' }}>
            <span className="sc-dot sc-dot-lime" style={{ display: 'inline-block', marginRight: 6 }} />
            everything that exists is up :D
          </div>
        </div>
      </div>
      <div className="sc-footer-bottom">
        © 2026 · not AI-generated (mostly) · thanks for reading this far {'>:DD'}
      </div>
    </footer>
  )
}
