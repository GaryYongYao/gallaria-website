// import { useState } from 'react'
import styles from 'styles/modules/ProductDetail.module.scss'

function Recommendation({ recommendations }) {
  return (
    <div className={`container ${styles['section-recommendation']}`}>
      <div className={styles['title-container']}>
        <span>
          PRODUCTS YOU MIGHT LIKE
        </span>
      </div>
      <div className={styles['items-container']}>
      </div>
    </div>
  )
}

export default Recommendation
