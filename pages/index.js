import { useEffect } from 'react'
import Head from 'next/head'
import { animateScroll as scroll } from 'react-scroll'
import styles from 'styles/modules/Home.module.scss'
import ReactFullpage from '@fullpage/react-fullpage'
import { Footer, Header, HeaderWhite } from 'components'
import { Design, Experience, Featured, Hero, Highlight, Project } from 'sections/Home'
import request from 'utils/request'
import { queryGetFeatureProducts } from 'utils/graphql'

export default function Home({ featured }) {
  const showElement = (e) => {
    const ele = document.getElementsByClassName('fp-scroller')[0]
    const header = document.getElementById('header')
    const transformDistance = Math.abs(ele.getBoundingClientRect().y) + e.deltaY
    if (transformDistance < ele.getBoundingClientRect().height - window.innerHeight + 10) header.style.transform = `translateY(${(transformDistance < 0) ? 0 : transformDistance}px)`
    else header.style.transform = `translateY(${ele.getBoundingClientRect().height - window.innerHeight}px)`
  }

  /* const showTouchElement = () => {
    const ele = document.getElementsByClassName('fp-scroller')[0]
    const translatePt = parseInt(ele.style.transform.split('0px, ')[1].split('px)')[0], 10)
    const header = document.getElementById('header')
    const transformDistance = Math.abs(translatePt)
    header.style.transform = `translateY(${transformDistance <= 6 ? 0 : transformDistance}px)`
  } */

  const getEle = () => {
    const ele = document.getElementsByClassName('fp-scroller')[0]
    if (ele) ele.addEventListener('wheel', showElement)
    /* if (ele) ele.addEventListener('touchmove', showTouchElement)
    if (ele) ele.addEventListener('touchend', showTouchElement) */
  }

  useEffect(() => {
    document.body.className = styles['body']
    const navData = window.performance.getEntriesByType('navigation')
    if (navData.length > 0 && navData[0].loadEventEnd > 0) getEle()
    else window.addEventListener('load', getEle)
  }, [])

  const scrollToContent = () => {
    const content = document.getElementById('mobile-content').offsetTop
    scroll.scrollTo(content, {
      duration: 1400,
      smooth: true
    })
  }

  return (
    <div className={styles['container']}>
      <Head>
        <title>Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['desktop-only']}>
        <ReactFullpage
          scrollOverflow
          scrollingSpeed={1400}
          keyboardScrolling={false}
          responsiveWidth={991}
          render={({ fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <div id="fullpage-wrapper">
                <div className="section">
                  <div style={{ width: '100%' }}>
                    <HeaderWhite
                      setAllowScrolling={(fullpageApi || {}).setAllowScrolling}
                    />
                  </div>
                  <Hero moveSectionDown={(fullpageApi || {}).moveSectionDown} />
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
                  <Highlight id="desktop-content" />
                  <Experience />
                  <Featured data={featured} />
                  <Project />
                  <Design />
                  <Footer />
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
      <div className={styles['mobile-only']}>
        <div style={{ width: '100%' }}>
          <HeaderWhite />
        </div>
        <Hero scrollToContent={scrollToContent} />
        <Highlight id="mobile-content" />
        <Experience />
        <Featured data={featured} />
        <Project />
        <Design />
        <Footer />
      </div>
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
