import { useState, useContext } from 'react'
import Cookies from 'js-cookie'
import { findIndex } from 'lodash'
import { EnquiryContext } from 'utils/enquiryCookie'
import { CartContext } from 'utils/cartCookie'
import styles from 'styles/modules/ProductDetail.module.scss'
import { DropdownUnderline, NumberInput } from 'components'

function Details({ data }) {
  const { setEnquiryAmount, setEnquiryCart } = useContext(EnquiryContext)
  const { setCartAmount, setShoppingCart } = useContext(CartContext)
  const { code, name, price, desc, forSale, details, variants, file } = data
  const [number, setNumber] = useState(0)
  const [selected, setSelected] = useState(variants[0] || '')
  const [info, setInfo] = useState('details')

  const addToEnquiry = () => {
    if (number < 1) {
      alert('Must add with quantity count')
      return
    }
    const newEnquiry = {
      name: data.name,
      price: data.price,
      id: data._id,
      code: data.code,
      image: data.primaryImage,
      quantity: number,
      variant: selected
    }
    const enquiries = Cookies.get('enquiries')

    if (!enquiries) {
      Cookies.set('enquiries', [newEnquiry])
    } else {
      const oldEnquiries = JSON.parse(enquiries)
      const sameProductIndex = findIndex(oldEnquiries, { id: data._id })

      if (sameProductIndex > -1) {
        if (data.variants.length > 0) {
          const sameVariantIndex = findIndex(oldEnquiries, { id: data._id, variant: selected })
          if (sameVariantIndex > -1) oldEnquiries.splice(sameVariantIndex, 1, newEnquiry)
          else oldEnquiries.push(newEnquiry)
        } else oldEnquiries.splice(sameProductIndex, 1, newEnquiry)
      } else oldEnquiries.push(newEnquiry)

      Cookies.set('enquiries', oldEnquiries)
    }
    setEnquiryCart(JSON.parse(Cookies.get('enquiries')))
    setEnquiryAmount(JSON.parse(Cookies.get('enquiries')).length)
    alert('Product added to enquiry')
  }

  const addToCart = () => {
    if (number < 1) {
      alert('Must add with quantity count')
      return
    }
    const newCart = {
      name: data.name,
      price: data.price,
      id: data._id,
      code: data.code,
      image: data.primaryImage,
      quantity: number,
      variant: selected
    }
    const cart = Cookies.get('cart')

    if (!cart) {
      Cookies.set('cart', [newCart])
    } else {
      const oldCart = JSON.parse(cart)
      const sameProductIndex = findIndex(oldCart, { id: data._id })

      if (sameProductIndex > -1) {
        if (data.variants.length > 0) {
          const sameVariantIndex = findIndex(oldCart, { id: data._id, variant: selected })
          if (sameVariantIndex > -1) oldCart.splice(sameVariantIndex, 1, newCart)
          else oldCart.push(newCart)
        } else oldCart.splice(sameProductIndex, 1, newCart)
      } else oldCart.push(newCart)

      Cookies.set('cart', oldCart)
    }
    setShoppingCart(JSON.parse(Cookies.get('cart')))
    setCartAmount(JSON.parse(Cookies.get('cart')).length)
    alert('Product added to cart')
  }

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
        <span>${price.toFixed(2)}</span>
      </div>
      <div className={styles['container-desc']}>
        <span>{desc}</span>
      </div>
      <div className={styles['container-variant']}>
        {variants.length > 0 && (
          <DropdownUnderline
            value={selected}
            items={variants}
            setValue={setSelected}
          />
        )}
      </div>
      <div className={styles['container-number']}>
        <NumberInput input={number} setValue={setNumber} />
      </div>
      <div className={styles['container-button']}>
        <div
          className="button-contained"
          onClick={() => {
            forSale ? addToCart() : addToEnquiry()
          }}
        >
          {forSale ? 'ADD TO CART' : 'ADD TO ENQUIRY'}
        </div>
      </div>
      <div className={styles['container-title-download']}>
        <a
          href=""
          className={info === 'details' ? styles['selected'] : ''}
          onClick={(e) => {
            e.preventDefault()
            setInfo('details')
          }}
        >
          PRODUCT DETAILS
        </a>
        <span className="slash">/</span>
        <a
          href=""
          className={info === 'download' ? styles['selected'] : ''}
          onClick={(e) => {
            e.preventDefault()
            setInfo('download')
          }}
        >
          DOWNLOADS
        </a>
      </div>
      <div className={`${styles['container-details']}`}>
        <div className={`${styles['left']} ${info === 'details' && styles['show']}`}>
          {details.map(detail => (
            <div key={detail.title} className={styles['detail']}>
              <div className={styles['title']}>{detail.title}</div>
              <div className={styles['info']} dangerouslySetInnerHTML={{ __html: detail.info.replace(/\n/g, '<br />') }} />
            </div>
          ))}
          {variants.length > 0 && (
            <div className={styles['detail']}>
              <div className={styles['title']}>Variant</div>
              <div className={styles['info']}>{variants.map(variant => <p key={variant}>{variant}</p>)}</div>
            </div>
          )}
        </div>
        <div className={`${styles['right']} ${info === 'download' && styles['show']}`}>
          {file.map(f => (
            <div key={f} className={styles['detail']}>
              <a
                href={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(f)}`}
                target="_blank"
                rel="noreferrer"
              >
                {f.split('/')[1]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
