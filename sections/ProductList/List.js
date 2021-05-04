import styles from 'styles/modules/ProductList.module.scss'
import { Link } from 'components'
import { removeSpace } from 'utils/validation'

function List({ data }) {
  return (
    <div className={styles['section-list']}>
      <div className="container">
        <div className={`${styles['masonry']} masonry`}>
          {data.map(d => (
            <div
              key={d.name}
              data-name={d.name}
              data-date={d.createdDate}
              className={`${styles['item']} mix ${removeSpace(d.category)} ${removeSpace(d.sub || '')} ${removeSpace(d.series || '')}`}
            >
              <Link href={`/product/${d.code}`}>
                <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(d.primaryImage)}`} />
                <div className={styles['overlay']} />
                <span className={styles['code']}>Code: {d.code}</span>
                <span className={styles['name']}>{d.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
