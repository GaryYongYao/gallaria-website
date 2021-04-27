import Head from 'next/head'
import styles from 'styles/modules/Home.module.scss'
import { Footer, HeaderWhite } from 'components'
import { Design, Experience, Hero, Highlight, Project } from 'sections/Home'

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderWhite />
      <Hero />
      <Highlight />
      <Experience />
      <Project />
      <Design />
      <Footer />
    </div>
  )
}
