import styles from 'styles/modules/Home.module.scss'
import { Link } from 'components'

export default function FeaturedSection({ data }) {
  return (
    <div className={styles['section-featured']}>
      <div className={`container ${styles['title-box']}`}>
        <div className="col-6">
          <div className={`container ${styles['title-padding']}`}>
            <div className={styles['title']}>
              <span>
                FEATURED PRODUCTS
              </span>
            </div>
            <div className={styles['divider']} />
          </div>
        </div>
      </div>
      <div className="container featured-container">
        <div className="row">
          {data.map((d, i) => {
            let col
            if (i === 0 || i === 4 || i === 6 || i === 10) col = 'col-6 col-lg-4'
            else if (i === 1 || i === 3 || i === 7 || i === 9) col = 'col-6 col-lg-8'
            else col = 'col-12'

            return (
              <div className={col}>
                <Link href={`/product/${d.code}`}>
                  <div className={styles['featured-items']} style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(d.primaryImage)}')` }}>
                    <div className={styles['img-overlay']} />
                    <span className={styles['name']}>{d.name}</span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
