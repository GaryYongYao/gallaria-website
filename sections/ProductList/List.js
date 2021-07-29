import styles from 'styles/modules/ProductList.module.scss'
import { findIndex } from 'lodash'
import { Link } from 'components'
import { removeSpace } from 'utils/validation'

function List({ data, displayList, multiFilterClass, perPage }) {
  const getPage = (code) => {
    let value = 0
    const index = findIndex(displayList, ['code', code])
    if (index > -1) {
      value = Math.ceil((index + 1) / perPage)
      return `page-${value}`
    }
    return `${value}`
  }

  const getClass = (code, name, category, sub, series, altCode) => {
    let classes = `${styles['item']} mix ${removeSpace(code)} ${removeSpace(name)} ${removeSpace(category)}`
    classes = (altCode && altCode.length > 0) ? `${classes} ${altCode.map(alt => removeSpace(alt)).join(' ')}` : classes
    classes = sub ? `${classes} ${removeSpace(sub)}` : classes
    classes = series ? `${classes} ${removeSpace(series)}` : classes

    return classes
  }

  return (
    <div className={styles['section-list']}>
      <div className="container">
        <div className={`${styles['masonry']} masonry`}>
          {data.map((d) => (!d.isDraft && (d.primaryImage || d.images)) && (
            <div
              key={d.name}
              data-name={d.name}
              data-date={d.createdDate}
              className={`${getClass(d.code, d.name, d.category, d.sub, d.series, d.altCode)} ${getPage(d.code)} ${multiFilterClass}`}
            >
              <Link href={`/product/${encodeURIComponent(d.code)}`}>
                <img src={`${process.env.NEXT_PUBLIC_MEDIA_FOLDER}${encodeURIComponent(d.primaryImage || (d.images || [])[0])}`} />
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
