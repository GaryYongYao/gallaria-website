import styles from 'styles/modules/Home.module.scss'
import { Link } from 'components'

export default function HeroSection() {
  return (
    <div className={styles['section-hero']}>
      <div className={styles['overlay']} />
      <div className={styles['down-button']}>
        <Link href="/#">
          <img src="/svg/inverted-down.svg" alt="Down" />
        </Link>
      </div>
    </div>
  )
}
