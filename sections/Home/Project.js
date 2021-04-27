import styles from 'styles/modules/Home.module.scss'
import Link from 'components/Link'

export default function ProjectSection() {
  return (
    <div className={styles['section-project']}>
      <div className={`container ${styles['title-box']}`}>
        <div className="col-12">
          <div className={`container ${styles['title-padding']}`}>
            <div className={styles['title']}>
              <span>LATEST PROJECTS</span>
            </div>
            <div className={styles['divider']} />
          </div>
        </div>
      </div>
      <div className={`container ${styles['photo-box']}`}>
        <div className="row">
          <div className={`col-lg-6 ${styles['column']}`}>
            <Link href="/#" style={styles['photo']}>
              <img width="100%" src="/images/project-1.png" />
              <div className={styles['overlay']} />
              <div className={`container ${styles['date']}`}>
                <span>JAN 2020</span>
              </div>
              <div className={`container ${styles['type']}`}>
                <span>Commercial</span>
              </div>
              <div className={`container ${styles['text']}`}>
                <span>PROJECT 01</span>
              </div>
            </Link>
          </div>
          <div className={`col-lg-6 ${styles['column']}`}>
            <Link href="/#" style={styles['photo']}>
              <img width="100%" src="/images/project-2.png" />
              <div className={styles['overlay']} />
              <div className={`container ${styles['date']}`}>
                <span>JAN 2020</span>
              </div>
              <div className={`container ${styles['type']}`}>
                <span>Commercial</span>
              </div>
              <div className={`container ${styles['text']}`}>
                <span>PROJECT 02</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
