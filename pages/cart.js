import Head from 'next/head'
import { useContext } from 'react'
import { Footer, Header } from 'components'
import { CartContext } from 'utils/cartCookie'
import { List, NoItem } from 'sections/Cart'
import styles from 'styles/modules/Cart.module.scss'

function Projects() {
  const { cartAmount } = useContext(CartContext)

  return (
    <div className={styles['container']}>
      <Head>
        <title>Shopping Cart - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://js.stripe.com/v3/" />
      </Head>

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
