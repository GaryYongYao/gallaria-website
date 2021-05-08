import Head from 'next/head'
import { useEffect } from 'react'
// eslint-disable-next-line
import { Link, Element, Events, scrollSpy, scroller } from 'react-scroll'
import styles from 'styles/modules/About.module.scss'
import { Footer, Header } from 'components'

function Product() {
  useEffect(() => {
    document.body.className = ''
  }, [])

  // eslint-disable-next-line
  const scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  // eslint-disable-next-line
  const scrollToWithContainer = () => {
    const goToContainer = new Promise((resolve) => {
      Events.scrollEvent.register('end', () => {
        resolve()
        Events.scrollEvent.remove('end')
      })

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    })

    goToContainer.then(() => {
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      })
    })
  }

  return (
    <div className={styles['container']}>
      <Head>
        <title>About Us - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container">
        <section className={styles['intelligent-bathroom']}>
          <img src="/images/about/intelligentbathroom.png" alt="Intelligent Bathroom" />
        </section>
      </div>
      <div className={styles['content']}>
        <div className="container">
          <div className={`${styles['selection']} row`}>
            <div className="col-3" />
            <div className="col-2">
              <Link
                activeClass={styles['active']}
                to="our-story"
                spy={true}
                smooth={true}
                duration={1200}
                style={{ color: 'white' }}
              >
                1. OUR STORY
              </Link>
            </div>
            <div className="col-2">
              <Link
                activeClass={styles['active']}
                to="design"
                spy={true}
                smooth={true}
                duration={1200}
              >
                2. DESIGN
              </Link>
            </div>
            <div className="col-2">
              <Link
                activeClass={styles['active']}
                to="service"
                spy={true}
                smooth={true}
                duration={1200}
              >
                3. SERVICE
              </Link>
            </div>
            <div className="col-2">
              <Link
                activeClass={styles['active']}
                to="warranty"
                spy={true}
                smooth={true}
                duration={1200}
              >
                4. WARRANTY
              </Link>
            </div>
          </div>
          <Element name="our-story" className={`${styles['section']} row`}>
            <div className="col-lg-3">
              <span className={styles['title']}>
                OUR STORY
              </span>
            </div>
            <div className="col-lg-8">
              <span className={styles['desc']}>
                From our base in Sydney, New South Wales, Gallaria Bathware have been specialising in Bathroom ware for eighteen years. During that time we have built a reputation for quality and integrity, gaining the Watermark Licence and WELS certifications, and supplying thousands of customers with affordable, stylish and beautifully engineered products.
              </span>
            </div>
          </Element>
          <img src="/images/about/image-1.png" alt="Gallaria" />
          <Element name="design" className={`${styles['section']} row`}>
            <div className="col-lg-3">
              <span className={styles['title']}>
                DESIGN
              </span>
            </div>
            <div className="col-lg-8">
              <span className={styles['desc']}>
                Combining our passion for refined design with years of experience in the industry, Gallaria is the preferred choice for customers who want the ultimate in style and quality at an attractive price.
              </span>
            </div>
          </Element>
          <img src="/images/about/image-2.png" alt="Gallaria" />
          <Element name="service" className={`${styles['section']} row`}>
            <div className="col-lg-3">
              <span className={styles['title']}>
                SERVICE
              </span>
            </div>
            <div className="col-lg-8">
              <span className={styles['desc']}>
                Our total emphasis on customer satisfaction means that as well as creating the finest products available, we have also made them easy to install and maintain.
              </span>
            </div>
          </Element>
          <img src="/images/about/graphic.png" alt="Gallaria" />
          <Element name="warranty" className={`${styles['section']} row`}>
            <div className="col-lg-3">
              <span className={styles['title']}>
                WARRANTY
              </span>
            </div>
            <div className="col-lg-8">
              <span className={styles['desc']}>
                Customers benefit from our full After Sales & Service program, underpinned by comprehensive manufacturer Warranties and backed by service from fully qualified, licensed plumbers. To ensure smooth service, we also stock the spare parts needed to bring you years of flawless utility.
              </span>
            </div>
          </Element>
        </div>
      </div>
      <div className="container">
        <section className={styles['mamo']}>
          <img src="/images/about/mamo.svg" alt="Intelligent Bathroom" />
          <span>Together with MAMO, Gallaria redefines the bathroom experience with a full range of fixtures and textures.</span>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Product
