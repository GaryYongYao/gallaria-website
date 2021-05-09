import Head from 'next/head'
import { Footer, Header } from 'components'
import styles from 'styles/modules/ProductList.module.scss'

function Showroom() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Showrooms - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Footer />
    </div>
  )
}

export default Showroom
