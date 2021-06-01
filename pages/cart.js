import { useContext } from 'react'
import { Footer, Header, HeadMeta } from 'components'
import { CartContext } from 'utils/cartCookie'
import { List, NoItem } from 'sections/Cart'
import styles from 'styles/modules/Cart.module.scss'

function Projects() {
  const { cartAmount } = useContext(CartContext)

  return (
    <div className={styles['container']}>
      <HeadMeta
        title="Shopping Cart - Gallaria"
        desc="INTELLIGENT BATHROOMS BY GALLARIA"
        keywords=""
        robots="index, follow"
        url="https://www.gallaria.com.au/cart"
        metaOG="https://www.gallaria.com.au/svg/logo-black.svg"
        metaTwitter="https://www.gallaria.com.au/svg/logo-black.svg"
      />

      <Header />
      <section className={styles['section-title']}>
        <div className="container">
          <div className={styles['title']}>
            CART {cartAmount > 0 && `(${cartAmount})`}
          </div>
        </div>
      </section>

      {cartAmount < 1 && <NoItem />}
      {cartAmount > 0 && <List />}
      <Footer />
    </div>
  )
}

export default Projects
