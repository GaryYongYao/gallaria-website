import styles from 'styles/modules/Home.module.scss'

export default function HeroSection({ moveSectionDown, scrollToContent }) {
  return (
    <div id="hero" className={styles['section-hero']} onScroll={() => console.log('lol')}>
      <div className={styles['overlay']} />
      <div className={styles['down-button']}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault()
            console.log(scrollToContent)
            moveSectionDown && moveSectionDown()
            scrollToContent && scrollToContent()
          }}
        >
          <img src="/svg/inverted-down.svg" alt="Down" />
        </a>
      </div>
    </div>
  )
}
