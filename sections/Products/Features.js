import styles from 'styles/modules/ProductDetail.module.scss'

function Features({ data }) {
  const { features } = data

  return (
    <div className={styles['section-features']}>
      <div className="container">
        <div className={styles['title-container']}>
          <span>FEATURES</span>
        </div>
      </div>
      {features.map(feature => (
        <img key={feature} src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(feature)}`} />
      ))}
    </div>
  )
}

export default Features
