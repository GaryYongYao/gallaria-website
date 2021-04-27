import { useState } from 'react'
import styles from 'styles/modules/ProductDetail.module.scss'

function Gallery({ data }) {
  const { primaryImage, images } = data
  const [selected, setSelected] = useState(primaryImage)

  return (
    <div className={`col-lg-6 ${styles['section-gallery']}`}>
      <div>
        <div className={styles['selected-image']}>
          <img width="100%" src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(selected)}`} />
        </div>
        <div className={styles['image-gallery']}>
          <div className="row" style={{ flexWrap: 'nowrap' }} >
            {images.map(image => (
              <div
                key={image}
                onClick={() => setSelected(image)}
                className={`${(selected === image) ? styles['selected'] : ''} col-4`}
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(image)})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
