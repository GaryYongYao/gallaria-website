import { useEffect, useState } from 'react'
import Head from 'next/head'
import { animateScroll as scroll } from 'react-scroll'
import styles from 'styles/modules/Home.module.scss'
import { Footer, Header, HeaderWhite } from 'components'
import { Design, Experience, Featured, Hero, Highlight, Project } from 'sections/Home'
import request from 'utils/request'
import { queryGetFeatureProducts } from 'utils/graphql'

export default function Home({ featured }) {
  const [touch, setTouch] = useState(0)

  useEffect(() => {
    document.body.scrollTo(0, 0)
  }, [])

  const scrollToContent = () => {
    document.body.className = `${styles['body']} ${styles['inContent']}`
    const content = document.getElementById('header').offsetTop
    scroll.scrollTo(content, {
      duration: 1400,
      smooth: true,
      ignoreCancelEvents: true
    })
  }

  const scrollToHero = () => {
    document.body.className = styles['body']
    const content = document.getElementById('hero').offsetTop
    scroll.scrollTo(content, {
      duration: 1400,
      smooth: true,
      ignoreCancelEvents: true
    })
  }

  const wheelHero = (e) => e.deltaY > 0 && scrollToContent()
  const touchHero = (e) => e.touches[0].pageY - touch < 0 && scrollToContent()

  return (
    <div className={styles['container']}>
      <Head>
        <title>Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ width: '100%' }}>
        <HeaderWhite />
      </div>
      <Hero
        wheelHero={wheelHero}
        touchHero={touchHero}
        setTouch={setTouch}
        scrollToContent={scrollToContent}
      />
      <div
        id="header"
        style={{
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 2
        }}
      >
        <Header />
      </div>
      <Highlight
        scrollToHero={scrollToHero}
        setTouch={setTouch}
        touch={touch}
      />
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
