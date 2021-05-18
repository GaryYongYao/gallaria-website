import styles from 'styles/modules/Home.module.scss'
import ImageMap from './ImageMap'

export default function ExperienceSection() {
  return (
    <div className={styles['section-experience']}>
      <div className={`container ${styles['title-box']}`}>
        <div className="col-6">
          <div className={`container ${styles['title-padding']}`}>
            <div className={styles['title']}>
              <span>
                COMPLETE YOUR BATHROOM EXPERIENCE WITH GALLARIA
              </span>
            </div>
            <div className={styles['divider']} />
          </div>
        </div>
      </div>
      <div className={styles['experience-image']}>
        <ImageMap />
        <img src="/images/experience.png" className={styles['mobile-image']} />
      </div>
    </div>
  )
}
