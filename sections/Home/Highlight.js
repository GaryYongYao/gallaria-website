import styles from 'styles/modules/Home.module.scss'
import { Link } from 'components'

export default function HighlightSection() {
  const MobileBox = ({ link, img, text }) => (
    <Link href={link} style="col-6">
      <div
        className={styles['mobile-box-img']}
        style={{ backgroundImage: `url('${img}')` }}
      />
      <span className={styles['mobile-box-txt']}>{text}</span>
    </Link>
  )

  return (
    <div id="content" className={`section-highlight ${styles['section-highlight']}`}>
      <div className="container">
        <div className={styles['text-container']}>
          <span className={styles['title']}>
            CONCEALED DESIGN WITH SMART CONTROL
          </span>
          <span className={styles['desc']}>
            Flexible to maintain and install
          </span>
          <div className={`col-1 ${styles['divider']}`} />
        </div>
        <div className={`col-1 ${styles['video-container']}`}>
          <video autoPlay loop muted>
            <source src="/video/video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={`col-12 ${styles['flex-container']}`}>
          <Link href="/#" style={styles['item-wrapper']}>
            <div className={`container ${styles['item-name']}`}>WALL HUNG PAN</div>
          </Link>
          <Link href="/#" style={styles['item-wrapper']}>
            <div className={`container ${styles['item-name']}`}>FLOOR PAN</div>
          </Link>
        </div>
        <div className={`col-12 ${styles['mobile-container']}`}>
          <div className="row">
            <MobileBox
              link="/#"
              img="/images/wall-pan.png"
              text="WALL HUNG PAN"
            />
            <MobileBox
              link="/#"
              img="/images/floor-pan.png"
              text="FLOOR PAN"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles['text-container']}>
          <span className={styles['title']}>
            CONCEALED DESIGN WITH SMART CONTROL
          </span>
          <span className={styles['desc']}>
            Flexible to maintain and install
          </span>
          <div className={`col-1 ${styles['divider']}`} />
        </div>
        <div className={`col-1 ${styles['video-container']}`}>
          <video autoPlay loop muted>
            <source src="/video/video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={`col-12 ${styles['images-container']}`}>
          <div className="row">
            <Link href="/#" style="col-4">
              <div
                className={styles['img-box']}
                style={{ backgroundImage: 'url("/images/recom-1.png")' }}
              >
                <div className={styles['img-overlay']} />
                <span className={styles['shop-now']}>SHOP NOW</span>
                <span className={styles['name']}>Product 01</span>
              </div>
            </Link>
            <Link href="/#" style="col-4">
              <div
                className={styles['img-box']}
                style={{ backgroundImage: 'url("/images/recom-2.png")' }}
              >
                <div className={styles['img-overlay']} />
                <span className={styles['shop-now']}>SHOP NOW</span>
                <span className={styles['name']}>Product 02</span>
              </div>
            </Link>
            <Link href="/#" style="col-4">
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
              link="/#"
              img="/images/recom-1.png"
              text="Product 01"
            />
            <MobileBox
              link="/#"
              img="/images/recom-2.png"
              text="Product 02"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
