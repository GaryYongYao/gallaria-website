import styles from 'styles/modules/Home.module.scss'
import { Link } from 'components'

export default function HeroSection() {
  return (
    <div id="hero" className={styles['section-hero']} onScroll={() => console.log('lol')}>
      <div className={styles['overlay']} />
      <div className={styles['down-button']}>
        <Link href="/#content">
          <img src="/svg/inverted-down.svg" alt="Down" />
        </Link>
      </div>
    </div>
  )
}
