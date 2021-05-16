import { useState, Fragment } from 'react'
import styles from 'styles/modules/ProductList.module.scss'

function Filter({ selected, setSelected }) {
  const [open, setOpen] = useState(false)

  const variants = [
    { name: 'DEFAULT', value: 'default:asc' },
    { name: 'A - Z', value: 'name:asc' },
    { name: 'Z - A', value: 'name:desc' },
    { name: 'DATE:  NEW - OLD', value: 'date:desc' },
    { name: 'DATE:  OLD - NEW', value: 'date:asc' }
  ]
  console.log(variants)

  return (
    <>
      <div className={styles['sorting']}>
        <div className={`${styles['sorting-button']}${open ? ` ${styles['opened']}` : ''}`} onClick={() => setOpen(!open)}>
          <span>
            SORT BY:
          </span>
          <span>
            {selected.name}
            <img src="/svg/down.svg" alt="Dropdown" className={open ? 'open' : ''} />
          </span>
        </div>
        <div className={`${styles['dropdown-items']}${open ? ` ${styles['opened']}` : ''}`}>
          {variants.map(variant => variant.name !== selected.name && (
            <Fragment key={variant.name}>
              <div
                className={styles['item']}
                onClick={() => {
                  setOpen(false)
                  setSelected(variant)
                }}
              >
                <span>
                  {variant.name}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default Filter
