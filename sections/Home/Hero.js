import styles from 'styles/modules/Home.module.scss'

export default function HeroSection({ scrollToContent, wheelHero, touchHero, setTouch }) {
  return (
    <div
      id="hero"
      onWheel={wheelHero}
      onTouchStart={(e) => setTouch(e.touches[0].pageY)}
      onTouchMove={touchHero}
      className={styles['section-hero']}
    >
      <div className={styles['overlay']} />
      <div className={styles['down-button']}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault()
            scrollToContent()
          }}
        >
          <img src="/svg/inverted-down.svg" alt="Down" />
        </a>
      </div>
    </div>
  )
}
