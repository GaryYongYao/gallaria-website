import { useEffect } from 'react'
import styles from 'styles/modules/Home.module.scss'
import { showFromBottom } from 'utils/animationUtils'

export default function DesignSection() {
  const showElement = () => {
    showFromBottom('our-design', styles['text-box'])
  }

  const getEle = () => {
    const ele = document.getElementsByClassName('fp-scroller')[0]
    if (ele) ele.addEventListener('wheel', showElement)
  }

  useEffect(() => {
    window.addEventListener('load', getEle)

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('load', getEle)
    }
  }, [])

  return (
    <div className={`container ${styles['section-design']}`}>
      <div id="our-design" className={styles['text-box']}>
        <div className={styles['title']}>
          <span>ALL DESIGN</span>
        </div>
        <div className={styles['divider']} />
        <div className={styles['info']}>
          <span>
            All our designs are based on deep research and development by industry leading teams, then perfected using advanced 3D modelling techniques, and brought to life using the latest manufacturing processes and materials. We further assure the quality and utility of all our wares through rigorous quality inspection audits.
          </span>
        </div>
      </div>
    </div>
  )
}
