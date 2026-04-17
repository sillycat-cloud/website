import { useI18n } from '../i18n/I18nProvider'
import piskelCat from '../assets/piskel-cat.png'

export function PfpCredit() {
  const { t } = useI18n()
  return (
    <div className="sc-pfp-credit">
      <span className="sc-eyebrow">{t('pfp.eyebrow')}</span>
      <p
        className="sc-p"
        style={{ margin: 0 }}
        dangerouslySetInnerHTML={{ __html: t('pfp.bodyHtml') }}
      />
    </div>
  )
}

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="sc-footer">
      <img src={piskelCat} alt="" className="sc-footer-cat" />
      <div className="sc-footer-cols">
        <div className="sc-footer-col">
          <span className="sc-eyebrow">{t('footer.col1Eyebrow')}</span>
          <p className="sc-p" style={{ margin: '6px 0 0' }}>{t('footer.col1Body')}</p>
        </div>
        <div className="sc-footer-col">
          <span className="sc-eyebrow">{t('footer.col2Eyebrow')}</span>
          <a className="sc-link" href="https://github.com/sillycat-cloud" target="_blank" rel="noreferrer">{t('footer.col2Github')}</a>
          <a className="sc-link" href="https://discord.gg/sZxmbu4ZrG" target="_blank" rel="noreferrer">{t('footer.col2Discord')}</a>
          <a className="sc-link" href="https://soggy.cat" target="_blank" rel="noreferrer">{t('footer.col2Soggy')}</a>
        </div>
        <div className="sc-footer-col">
          <span className="sc-eyebrow">{t('footer.col3Eyebrow')}</span>
          <div className="sc-p" style={{ margin: '6px 0 0' }}>
            <span className="sc-dot sc-dot-lime" style={{ display: 'inline-block', marginRight: 6 }} />
            {t('footer.col3Body')}
          </div>
        </div>
      </div>
      <div className="sc-footer-bottom">{t('footer.bottom')}</div>
    </footer>
  )
}
