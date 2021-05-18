import styles from 'styles/modules/Home.module.scss'
import { Link } from 'components'

export default function HighlightSection({ scrolling, setScrolling, scrollToHero, setTouch, touch }) {
  const MobileBox = ({ link, img, text }) => (
    <Link href={link} style="col-6">
      <div
        className={styles['mobile-box-img']}
        style={{ backgroundImage: `url('${img}')` }}
      />
      <span className={styles['mobile-box-txt']}>{text}</span>
    </Link>
  )

  const wheelEvent = (e) => {
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
  }

  return (
    <div
      id="content"
      onWheel={wheelEvent}
      onTouchStart={(e) => setTouch(e.touches[0].pageY)}
      onTouchMove={touchEvent}
      onTouchEnd={touchEndEvent}
      className={`section-highlight ${styles['section-highlight']}`}
    >
      <div className="container">
        <div className={styles['text-container']}>
          <span className={styles['title']}>
            Intelligent Bathrooms by Gallaria
          </span>
          <span className={styles['desc']}>
            Hygiene and comfort evolved
          </span>
          <div className={`col-1 ${styles['divider']}`} />
        </div>
        <div className={`col-1 ${styles['video-container']}`}>
          <video autoPlay loop muted preload="auto" playsInline>
            <source src="/video/video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={`col-12 ${styles['flex-container']}`}>
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
          <span className={styles['title']}>
            Smart design and technology has never looked better
          </span>
          <span className={styles['desc']}>
            Discover the future of comfort plus cleanliness
          </span>
          <div className={`col-1 ${styles['divider']}`} />
        </div>
        <div className={`col-1 ${styles['video-container']}`}>
          <video autoPlay loop muted preload="auto" playsInline>
            <source src="/video/video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={`col-12 ${styles['images-container']}`}>
          <div className="row">
            <Link href="/product/DZ1000UNV" style="col-4">
              <div
                className={styles['img-box']}
                style={{ backgroundImage: 'url("/images/recom-1.png")' }}
              >
                <div className={styles['img-overlay']} />
                <span className={styles['shop-now']}>SHOP NOW</span>
                <span className={styles['name']}>Product 01</span>
              </div>
            </Link>
            <Link href="/product/EC520" style="col-4">
              <div
                className={styles['img-box']}
                style={{ backgroundImage: 'url("/images/recom-2.png")' }}
              >
                <div className={styles['img-overlay']} />
                <span className={styles['shop-now']}>SHOP NOW</span>
                <span className={styles['name']}>Product 02</span>
              </div>
            </Link>
            <Link href="/product/EV210" style="col-4">
              <div
                className={styles['img-box']}
                style={{ backgroundImage: 'url("/images/recom-3.png")' }}
              >
                <div className={styles['img-overlay']} />
                <span className={styles['shop-now']}>SHOP NOW</span>
                <span className={styles['name']}>Product 03</span>
              </div>
            </Link>
          </div>
        </div>
        <div className={`col-12 ${styles['mobile-container']}`}>
          <div className="row">
            <MobileBox
              link="/product/DZ1000UNV"
              img="/images/recom-1.png"
              text="Product 01"
            />
            <MobileBox
              link="/product/EC520"
              img="/images/recom-2.png"
              text="Product 02"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
