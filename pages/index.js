import Head from 'next/head'
import styles from 'styles/modules/Home.module.scss'
import { Footer, HeaderWhite } from 'components/components'
import Hero from 'sections/Home/Hero'

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderWhite />
      <Hero />
      <Footer />
    </div>
  )
}
