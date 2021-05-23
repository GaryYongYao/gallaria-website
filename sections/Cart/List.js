import { useContext, useState } from 'react'
import { sumBy } from 'lodash'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { CartContext } from 'utils/cartCookie'
import APIRequest from 'utils/APIRequest'
import Link from 'components/Link'
import styles from 'styles/modules/Cart.module.scss'

function List() {
  const [email, setEmail] = useState('gallariadev@gmail.com')
  const router = useRouter()
  const { setCartAmount, shoppingCart, setShoppingCart } = useContext(CartContext)

  const removeItem = (e, i) => {
    e.preventDefault()
    const cart = JSON.parse(Cookies.get('cart'))
    cart.splice(i, 1)
    Cookies.set('cart', cart)

    setShoppingCart(JSON.parse(Cookies.get('cart')))
    setCartAmount(JSON.parse(Cookies.get('cart')).length)
  }

  const addQuantity = (i) => {
    const cart = JSON.parse(Cookies.get('cart'))
    cart[i].quantity += 1
    Cookies.set('cart', cart)

    setShoppingCart(JSON.parse(Cookies.get('cart')))
    setCartAmount(JSON.parse(Cookies.get('cart')).length)
  }

  const removeQuantity = (i) => {
    const cart = JSON.parse(Cookies.get('cart'))
    if (cart[i].quantity - 1 > 0) cart[i].quantity -= 1
    Cookies.set('cart', cart)

    setShoppingCart(JSON.parse(Cookies.get('cart')))
    setCartAmount(JSON.parse(Cookies.get('cart')).length)
  }

  const handleChange = (e, i) => {
    const cart = JSON.parse(Cookies.get('cart'))
    cart[i].quantity = parseInt(e.target.value, 10)
    if (!e.target.value) cart[i].quantity = 1
    Cookies.set('cart', cart)

    setShoppingCart(JSON.parse(Cookies.get('cart')))
    setCartAmount(JSON.parse(Cookies.get('cart')).length)
  }

  const checkout = () => {
    const stripe = window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

    APIRequest('POST', '/api/checkout', {
      email,
      line_items: shoppingCart.map(product => ({
        price_data: {
          currency: 'aud',
          product_data: {
            name: product.name,
            images: [`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(product.image).replace('(', '%28').replace(')', '%29')}`],
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity
      }))
    })
      .then((response) => response.data)
      .then((session) => stripe.redirectToCheckout({ sessionId: session.id }))
      .then((result) => {
        if (result.error) {
          alert(result.error.message)
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <section className={styles['section-list']}>
      <div className="container">
        <div className={`${styles['list-title']} row`}>
          <div className="col-6">
            PRODUCTS
          </div>
          <div className={`${styles['hide-mobile']} ${styles['title-label']} col-lg-2`}>
            PRODUCTS
          </div>
          <div className={`${styles['title-label']} col-6 col-lg-2`}>
            QTY.
          </div>
          <div className={`${styles['hide-mobile']} col-lg-2`}>
            QTY.
          </div>
        </div>
        <div className={`${styles['divider']} ${styles['divider-1']}`} />
        <div className={styles['item-container']}>
          {shoppingCart.map((item, i) => (
            <div key={item.code} className={`row ${styles['item']}`}>
              <div className={`${styles['image-container']} col-4 col-lg-3`}>
                <Link href={`/product/${item.code}`}>
                  <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(item.image).replace('(', '%28').replace(')', '%29')}`} />
                </Link>
              </div>
              <div className={`${styles['text-container']} col-8 col-lg-3`}>
                <div className={styles['title']}>
                  <Link href={`/product/${item.code}`}>
                    {item.name}
                  </Link>
                  <span className={styles['mobile-quantity']}>{item.quantity}</span>
                </div>
                <div className={`${styles['info']} col-12 col-lg-4`}>
                  VARIANT: {item.variant || 'N/A'}
                  <br />
                  <span className={styles['mobile-price']}>
                    AUD: ${item.price.toFixed(2)}
                    <br />
                  </span>
                </div>
                <div className={styles['remove']}>
                  <a href="#" onClick={(e) => removeItem(e, i)}>
                    REMOVE
                  </a>
                  <a href="#" onClick={(e) => removeItem(e, i)}>
                    <img src="/svg/bin.svg" alt="remove" />
                  </a>
                </div>
              </div>
              <div className={`${styles['text-container']} ${styles['hide-mobile']} col-lg-2`}>
                <div className={`${styles['info']}`} style={{ textAlign: 'center' }}>
                  AUD: ${item.price.toFixed(2)}
                </div>
              </div>
              <div className={`${styles['text-container']} ${styles['hide-mobile']} col-lg-2`}>
                <div className={`${styles['info']}`}>
                  <span className={styles['quantity']}>
                    <span
                      onClick={() => removeQuantity(i)}
                      className={styles['minus']}
                    >
                      -
                    </span>
                    <input
                      value={item.quantity}
                      onChange={e => handleChange(e, i)}
                      type="number"
                    />
                    <span
                      onClick={() => addQuantity(i)}
                      className={styles['add']}
                    >
                      +
                    </span>
                  </span>
                </div>
              </div>
              <div className={`${styles['text-container']} ${styles['hide-mobile']} col-lg-2`}>
                <div className={`${styles['info']}`} style={{ textAlign: 'right' }}>
                  AUD: ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles['divider']} ${styles['divider-2']}`} />
        <div className={`row ${styles['total-container']}`}>
          <div className="col-5 col-lg-8" />
          <div className={`col-1 ${styles['label']}`}>
            SUBTOTAL:
          </div>
          <div className={`col-6 col-lg-3 ${styles['value']}`}>
            AUD ${sumBy(shoppingCart, item => item.price * item.quantity).toFixed(2)}
          </div>
        </div>
        <div className={`${styles['divider']} ${styles['divider-3']}`} />
        <div className={`${styles['button-container']} row`}>
          <div className="col-lg-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="button-outlined"
            >
              BACK TO BROWSING
            </button>
          </div>
          <div className="col-lg-3" style={{ marginLeft: 'auto' }}>
            <button type="button" className="button-contained" onClick={checkout}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default List
