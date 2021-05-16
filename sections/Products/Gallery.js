import Carousel from 'react-multi-carousel'
import styles from 'styles/modules/ProductDetail.module.scss'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 960 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 959, min: 372 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 371, min: 0 },
    items: 2,
    slidesToSlide: 2
  }
}

function Gallery({ data, selected, setSelected, setOpen }) {
  const { images } = data

  return (
    <div className={`col-lg-6 ${styles['section-gallery']}`}>
      <div>
        <div className={styles['selected-image']} onClick={() => setOpen(true)}>
          <img width="100%" src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(selected).replace('(', '%28').replace(')', '%29')}`} />
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
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(image).replace('(', '%28').replace(')', '%29')})` }}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Gallery
