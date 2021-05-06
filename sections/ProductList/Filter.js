import { useEffect, useState } from 'react'
import styles from 'styles/modules/ProductList.module.scss'

function Filter({ categories, setFilter, selection }) {
  const [open, setOpen] = useState(false)

  /* useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open]) */

  return (
    <>
      <div className={`${styles['backdrop']}${open ? ` ${styles['opened']}` : ''}`} onClick={() => setOpen(false)} />
      <div className={styles['filter']}>
        <div className={`${styles['filter-button']}${open ? ` ${styles['opened']}` : ''}`} onClick={() => setOpen(!open)}>
          <div className={`${styles['burger']}${open ? ` ${styles['opened']}` : ''}`}>
            <div />
          </div>
          <span>Filter</span>
        </div>
        <div className={`${styles['dropdown-items']}${open ? ` ${styles['opened']}` : ''}`}>
          {categories.map(({ name, id, sub, series }) => (
            <>
              <div
                key={name}
                className={styles['item']}
                onClick={() => setFilter(id)}
              >
                <span className={selection.includes(id) ? styles['selected'] : ''}>
                  {name}
                </span>
              </div>
              {sub.map(s => (
                <div
                  key={s.name}
                  className={`${styles['item']} ${styles['sub-item']}`}
                  onClick={() => setFilter(s.id)}
                >
                  <span className={(selection.includes(s.id) || selection.includes(id)) ? styles['selected'] : ''}>
                    {s.name}
                  </span>
                </div>
              ))}
              {series.map(s => (
                <div
                  key={s.name}
                  className={`${styles['item']} ${styles['sub-item']}`}
                  onClick={() => setFilter(s.id)}
                >
                  <span className={(selection.includes(s.id) || selection.includes(id)) ? styles['selected'] : ''}>
                    {s.name}
                  </span>
                </div>
              ))}
            </>
          ))}
          <div
            className={styles['reset']}
            onClick={() => {
              setFilter('all')
              setOpen(false)
            }}
          >
            RESET FILTER
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
