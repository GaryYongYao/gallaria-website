import { useEffect } from 'react'
import styles from 'styles/modules/Home.module.scss'
import { showFromBottom } from 'utils/animationUtils'

export default function DesignSection() {
  const showElement = () => {
    showFromBottom('our-design', styles['text-box'])
  }

  const getEle = () => {
    const ele = document.getElementsByClassName('fp-scroller')[0]
    if (ele) ele.addEventListener('scroll', showElement)
    if (ele) ele.addEventListener('wheel', showElement)
    if (ele) ele.addEventListener('touchmove', showElement)
    if (ele) ele.addEventListener('touchend', showElement)
  }

  useEffect(() => {
    window.addEventListener('load', getEle)
    const navData = window.performance.getEntriesByType('navigation')
    if (navData.length > 0 && navData[0].loadEventEnd > 0) getEle()
    else window.addEventListener('load', getEle)
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
