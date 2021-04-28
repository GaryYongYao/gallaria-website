import styles from 'styles/modules/ProductList.module.scss'
import { Link } from 'components'

function List({ data }) {
  return (
    <div className={styles['section-list']}>
      <div className="container">
        <div className={styles['masonry']}>
          {data.map(d => (
            <div key={d.name} className={styles['item']}>
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
