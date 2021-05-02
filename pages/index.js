import { useEffect } from 'react'
import Head from 'next/head'
import styles from 'styles/modules/Home.module.scss'
import { Footer, Header, HeaderWhite } from 'components'
import { Design, Experience, Featured, Hero, Highlight, Project } from 'sections/Home'
import request from 'utils/request'
import { showHeader } from 'utils/animationUtils'
import { queryGetFeatureProducts } from 'utils/graphql'

export default function Home({ featured }) {
  const showElement = () => {
    showHeader('header', styles['text-box'])
  }

  useEffect(() => {
    window.addEventListener('scroll', showElement)

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('scroll', showElement)
    }
  }, [])

  return (
    <div className={styles['container']}>
      <Head>
        <title>Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: '100%' }}>
        <HeaderWhite />
      </div>
      <Hero />
      <div
        id="header"
        style={{
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 2,
          opacity: 0,
          transition: 'all .2s linear'
        }}
      >
        <Header />
      </div>
      <Highlight />
      <Experience />
      <Featured data={featured} />
      <Project />
      <Design />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const response = await request(queryGetFeatureProducts)
  const featured = response.data.data.getFeatureProducts

  return {
    props: { featured }, // will be passed to the page component as props
  }
}
