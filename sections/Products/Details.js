import { useState } from 'react'
import styles from 'styles/modules/ProductDetail.module.scss'
import { DropdownUnderline, NumberInput } from 'components/components'

function Details({ data }) {
  const { code, name, price, desc, forSale, details, variants } = data
  const [number, setNumber] = useState(0)
  const [selected, setSelected] = useState(variants[0] || '')

  return (
    <div className={`col-lg-5 ${styles['section-details']}`}>
      <div className={styles['container-code']}>
        <span>
          Code: {code}
        </span>
      </div>
      <div className={styles['container-name']}>
        <h3>{name}</h3>
      </div>
      <div className={styles['container-price']}>
        <span>RRP PRICE:</span>
        <span>${price}</span>
      </div>
      <div className={styles['container-desc']}>
        <span>{desc}</span>
      </div>
      <div className={styles['container-variant']}>
        {variants && (
          <DropdownUnderline
            value={selected}
            items={variants}
            setValue={setSelected}
          />
        )}
      </div>
      {forSale && (
        <div className={styles['container-number']}>
          <NumberInput input={number} setValue={setNumber} />
        </div>
      )}
      <div className={styles['container-button']}>
        <div className="button-contained">
          {forSale ? 'ADD TO CART' : 'ENQUIRY'}
        </div>
      </div>
      <div className={styles['container-title-download']}>
        <div className="title">
          <span>PRODUCT DETAILS</span>
        </div>
        <span className="slash">/</span>
        <span>DOWNLOAD</span>
      </div>
      <div className={styles['container-details']}>
        <div>
          {details.map(detail => (
            <div key={detail.title} className={styles['detail']}>
              <div className={styles['title']}>{detail.title}</div>
              <div className={styles['info']}>{detail.info}</div>
            </div>
          ))}
          {variants && (
            <div className={styles['detail']}>
              <div className={styles['title']}>Variant</div>
              <div className={styles['info']}>{variants.map(variant => <p key={variant}>{variant}</p>)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Details
