import styles from 'styles/modules/Home.module.scss'
import { Link } from 'components'

export default function ImageBox() {
  return (
    <div className={styles['interactive-image']}>
      <img src="/images/experience.png" alt="" />
      <Link
        href="/products?filterUrl=BATHING"
        style={styles['image-map']}
        customStyle={{
          width: '34.12529025191676%',
          height: '26.05622489959839%',
          left: '7.417031763417303%',
          top: '67.36955823293173%'
        }}
      >
        <img src="/images/map-tub.png" />
      </Link>
      <Link
        href="/products?filterUrl=WASHING"
        style={styles['image-map']}
        customStyle={{
          width: '19.527929901423878%',
          height: '9.338755020080322%',
          left: '54.65498357064622%',
          top: '52.850120481927725%'
        }}
      >
        <img src="/images/map-basin.png" style={{ height: '100%' }} />
      </Link>
      <Link
        href="/products?filterUrl=INTELLIGENT-BATHROOM"
        style={styles['image-map']}
        customStyle={{
          width: '6.672562979189484%',
          height: '18.030522088353406%',
          left: '86.83745892661562%',
          top: '55.636546184739%'
        }}
      >
        <img src="/images/map-toilet.png" style={{ height: '100%', width: 'auto' }} />
      </Link>
    </div>
  )
}
