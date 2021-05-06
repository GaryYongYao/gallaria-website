import { useEffect } from 'react'
import Head from 'next/head'
import styles from 'styles/modules/Home.module.scss'
import ReactFullpage from '@fullpage/react-fullpage'
import { Footer, Header, HeaderWhite } from 'components'
import { Design, Experience, Featured, Hero, Highlight, Project } from 'sections/Home'
import request from 'utils/request'
import { queryGetFeatureProducts } from 'utils/graphql'

export default function Home({ featured }) {
  useEffect(() => {
    // eslint-disable-next-line
    require('fullpage.js/vendors/scrolloverflow')
    document.body.className = styles['body']
  }, [])

  const showElement = (e) => {
    const ele = document.getElementsByClassName('fp-scroller')[0]
    const translatePt = parseInt(ele.style.transform.split('0px, ')[1].split('px)')[0], 10)
    ele.style.transform = `translate(0px, ${translatePt}px)`
    const header = document.getElementById('header')
    const transformDistance = Math.abs(translatePt) + e.deltaY
    header.style.transform = `translateY(${transformDistance < 0 ? 0 : transformDistance}px)`
  }

  const showTouchElement = () => {
    const ele = document.getElementsByClassName('fp-scroller')[0]
    const translatePt = parseInt(ele.style.transform.split('0px, ')[1].split('px)')[0], 10)
    ele.style.transform = `translate(0px, ${translatePt}px)`
    const header = document.getElementById('header')
    const transformDistance = Math.abs(translatePt)
    header.style.transform = `translateY(${transformDistance <= 6 ? 0 : transformDistance}px)`
  }

  const getEle = () => {
    const ele = document.getElementsByClassName('fp-scroller')[0]
    if (ele) ele.addEventListener('wheel', showElement)
    if (ele) ele.addEventListener('touchmove', showTouchElement)
    if (ele) ele.addEventListener('scroll', showTouchElement)
  }

  useEffect(() => {
    window.addEventListener('load', getEle)

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('load', getEle)
    }
  }, [])

  return (
    <div className={styles['container']}>
      <Head>
        <title>Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactFullpage
        scrollOverflow
        keyboardScrolling={false}
        render={({ fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <div style={{ width: '100%' }}>
                <HeaderWhite />
              </div>
              <Hero />
            </div>
            <div className="section">
              <div
                id="header"
                style={{
                  width: '100%',
                  position: 'sticky',
                  top: '-20px',
                  zIndex: 2
                }}
              >
                <Header
                  setAllowScrolling={(fullpageApi || {}).setAllowScrolling}
                />
              </div>
              <Highlight />
              <Experience />
              <Featured data={featured} />
              <Project />
              <Design />
              <Footer />
            </div>
          </div>
        )}
      />
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
