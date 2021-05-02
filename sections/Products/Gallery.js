import Carousel from 'react-multi-carousel'
import { useState } from 'react'
import styles from 'styles/modules/ProductDetail.module.scss'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 960 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 959, min: 372 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 371, min: 0 },
    items: 2
  }
}

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
          <Carousel
            responsive={responsive}
            ssr={true}
          >
            {images.map(image => (
              <div
                key={image}
                onClick={() => setSelected(image)}
                className={`${(selected === image) ? styles['selected'] : ''}`}
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(image)})` }}
              />
            ))}
          </Carousel>
          {/* <div className="row" style={{ flexWrap: 'nowrap' }}>
            {images.map(image => (
              <div
                key={image}
                onClick={() => setSelected(image)}
                className={`${(selected === image) ? styles['selected'] : ''} col-4`}
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(image)})` }}
              />
            ))}
          </div> */}
        </div>
      </div>
      {/* <div style={{ background: 'black', height: "100vh", width: '100vw', position: 'fixed' }}></div> */}
    </div>
  )
}

export default Gallery
