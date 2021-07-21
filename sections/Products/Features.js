import styles from 'styles/modules/ProductDetail.module.scss'
import Image from 'next/image'

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
        <div key={feature}>
          {!feature.includes('mp4') && (
            <div style={{ width: '100%', paddingTop: '50%', position: 'relative' }}>
              <Image
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(feature).replace('(', '%28').replace(')', '%29')}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          {feature.includes('mp4') && (
            <video controls>
              <source src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(feature).replace('(', '%28').replace(')', '%29')}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  )
}

export default Features
