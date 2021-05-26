import { useEffect } from 'react'
import styles from 'styles/modules/Home.module.scss'
import { Link } from 'components'
import { showOpacity, showFromY } from 'utils/animationUtils'

export default function HighlightSection(/* { scrolling, setScrolling, scrollToHero, setTouch, touch } */) {
  const MobileBox = ({ link, img, text }) => (
    <Link href={link} style="col-6">
      <div
        className={styles['mobile-box-img']}
        style={{ backgroundImage: `url('${img}')` }}
      />
      <span className={styles['mobile-box-txt']}>{text}</span>
    </Link>
  )

  /* const wheelEvent = (e) => {
    const hero = document.getElementById('hero')
    if (e.deltaY < 0 && document.body.getBoundingClientRect().top + 1 > 0 - hero.clientHeight) {
      setScrolling(true)
      !scrolling && scrollToHero()
    }
  }

  const touchEvent = (e) => {
    const hero = document.getElementById('hero')
    if (e.touches[0].pageY - touch > 0 && document.body.getBoundingClientRect().top + 1 > 0 - hero.clientHeight) {
      setScrolling(true)
      !scrolling && scrollToHero()
    }
  }

  const touchEndEvent = (e) => {
    const hero = document.getElementById('hero')
    if (e.changedTouches[0].pageY - touch > 0 && document.body.getBoundingClientRect().top + 1 > 0 - hero.clientHeight) {
      setScrolling(true)
      !scrolling && scrollToHero()
    }
  } */

  const showElement = () => {
    showFromY('highlight-title-1', '')
    showFromY('highlight-title-2', '')
    showFromY('highlight-desc-1', '')
    showFromY('highlight-desc-2', '')
    showOpacity('highlight-video-1', `col-1 ${styles['video-container']}`)
    showOpacity('highlight-video-2', `col-1 ${styles['video-container']}`)
    showOpacity('highlight-cat', `col-12 ${styles['flex-container']}`)
    showOpacity('highlight-item-1', styles['img-box'])
    showOpacity('highlight-item-2', styles['img-box'])
    showOpacity('highlight-item-3', styles['img-box'])
  }

  useEffect(() => {
    window.addEventListener('scroll', showElement)

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('scroll', showElement)
    }
  }, [])

  return (
    <div
      id="content"
      // onWheel={wheelEvent}
      // onTouchStart={(e) => setTouch(e.touches[0].pageY)}
      // onTouchMove={touchEvent}
      // onTouchEnd={touchEndEvent}
      className={`section-highlight ${styles['section-highlight']}`}
    >
      <div className="container">
        <div className={styles['text-container']}>
          <div className={styles['title']}>
            <span id="highlight-title-1">
              Intelligent Bathrooms by Gallaria
            </span>
          </div>
          <div className={styles['desc']}>
            <span id="highlight-desc-1">
              Hygiene and comfort evolved
            </span>
          </div>
          <div className={`col-1 ${styles['divider']}`} />
        </div>
        <div id="highlight-video-1" className={`col-1 ${styles['video-container']}`}>
          <video autoPlay loop muted preload="auto" playsInline>
            <source src="/video/video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="highlight-cat" className={`col-12 ${styles['flex-container']}`}>
          <Link href="/products?filterUrl=Wall-Hung" style={styles['item-wrapper']}>
            <div className={`container ${styles['item-name']}`}>WALL HUNG PAN</div>
          </Link>
          <Link href="/products?filterUrl=Floor-pan" style={styles['item-wrapper']}>
            <div className={`container ${styles['item-name']}`}>FLOOR PAN</div>
          </Link>
        </div>
        <div className={`col-12 ${styles['mobile-container']}`}>
          <div className="row">
            <MobileBox
              link="/products?filterUrl=Wall-Hung"
              img="/images/wall-pan.png"
              text="WALL HUNG PAN"
            />
            <MobileBox
              link="/products?filterUrl=Floor-pan"
              img="/images/floor-pan.png"
              text="FLOOR PAN"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles['text-container']}>
          <div className={styles['title']}>
            <span id="highlight-title-2">
              Smart design and technology has never looked better
            </span>
          </div>
          <div className={styles['desc']}>
            <span id="highlight-desc-2">
              Discover the future of comfort plus cleanliness
            </span>
          </div>
          <div className={`col-1 ${styles['divider']}`} />
        </div>
        <div id="highlight-video-2" className={`col-1 ${styles['video-container']}`}>
          <video autoPlay loop muted preload="auto" playsInline>
            <source src="/video/video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={`col-12 ${styles['images-container']}`}>
          <div className="row">
            <Link href="/product/DZ1000UNV" style="col-4">
              <div
                id="highlight-item-1"
                className={styles['img-box']}
                style={{ backgroundImage: 'url("/images/recom-1.png")' }}
              >
                <div className={styles['img-overlay']} />
                <span className={styles['shop-now']}>SHOP NOW</span>
                <span className={styles['name']}>DANZACOMFORT+</span>
              </div>
            </Link>
            <Link href="/product/EC520" style="col-4">
              <div
                id="highlight-item-2"
                className={styles['img-box']}
                style={{ backgroundImage: 'url("/images/recom-2.png")' }}
              >
                <div className={styles['img-overlay']} />
                <span className={styles['shop-now']}>SHOP NOW</span>
                <span className={styles['name']}>ALTARETROFIT</span>
              </div>
            </Link>
            <Link href="/product/EV210" style="col-4">
              <div
                id="highlight-item-3"
                className={styles['img-box']}
                style={{ backgroundImage: 'url("/images/recom-3.png")' }}
              >
                <div className={styles['img-overlay']} />
                <span className={styles['shop-now']}>SHOP NOW</span>
                <span className={styles['name']}>EVOCOMFORT+</span>
              </div>
            </Link>
          </div>
        </div>
        <div className={`col-12 ${styles['mobile-container']}`}>
          <div className="row">
            <MobileBox
              link="/product/DZ1000UNV"
              img="/images/recom-1.png"
              text="DANZACOMFORT+"
            />
            <MobileBox
              link="/product/EC520"
              img="/images/recom-2.png"
              text="ALTARETROFIT"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
