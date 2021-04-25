import Head from 'next/head'
import styles from 'styles/modules/Home.module.scss'
import { Footer, HeaderWhite } from 'components'
import { Design, Hero, Project } from 'sections/Home'

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderWhite />
      <Hero />
      <Project />
      <Design />
      <Footer />
    </div>
  )
}
