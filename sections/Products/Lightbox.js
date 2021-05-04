import styles from 'styles/modules/ProductDetail.module.scss'
import 'react-multi-carousel/lib/styles.css'

function Lightbox({ open, selected, setOpen }) {
  return (
    <div className={`${styles['lightbox']} ${open ? styles['open'] : ''}`}>
      <div className="container">
        <div>
          <a
            href=""
            className={styles['close']}
            onClick={e => {
              e.preventDefault()
              setOpen(false)
            }}
          >
            <img src="/svg/cancel.svg" alt="Close" />
          </a>
        </div>
        <div className={styles['image-gallery']}>
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(selected)}`}
            />
            <img src="/svg/logo-black.svg" className={styles['logo']} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
