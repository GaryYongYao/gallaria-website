import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from 'styles/modules/ProductList.module.scss'
import { Carousel, Filter, List, Sorting } from 'sections/ProductList'
import { Footer, Header } from 'components'
import request from 'utils/request'
import { queryGetProducts, queryGetFeatureProducts, queryGetCategories } from 'utils/graphql'
import { removeSpace, filterURLRegex } from 'utils/validation'

function Product({ products, featured, categories }) {
  const router = useRouter()
  const [mixer, setMixer] = useState(() => {})
  const [selected, setSelected] = useState({ name: 'DEFAULT', value: 'default:asc' })
  const [filter, setFilter] = useState('')
  const [displayProducts, setDisplayProducts] = useState(products)
  const [selectors, setSelectors] = useState('')
  const [current, setCurrent] = useState(1)
  const perPage = 30

  useEffect(() => {
    document.body.className = ''
    // eslint-disable-next-line
    const mixitup = require('mixitup')
    const containerEl = document.querySelector('.masonry')
    const masonryAnimate = mixitup(containerEl)
    router.query.filterUrl && masonryAnimate.toggleOn(`.${removeSpace(router.query.filterUrl)}`).then(state => setSelectors(state.activeFilter.selector))

    setMixer(masonryAnimate)
  }, [])

  useEffect(() => {
    const { query } = router
    if (query.filterUrl && mixer) mixer.toggleOn(`.${removeSpace(query.filterUrl)}`).then(state => setSelectors(state.activeFilter.selector))
    if (query.search) {
      const display = products.filter(prod => {
        const match = (
          filterURLRegex(query.search, prod.name)
          || filterURLRegex(query.search, prod.code)
          || filterURLRegex(query.search, prod.category)
          || filterURLRegex(query.search, prod.sub)
          || filterURLRegex(query.search, prod.series)
        )
        return match
      })
      setDisplayProducts(display)
    }
  }, [router])

  useEffect(() => {
    mixer && mixer.forceRefresh()
    if (filter === '') return
    if (filter === 'all' && mixer) {
      if (displayProducts !== products) setDisplayProducts(products)
      mixer.filter('all').then(state => setSelectors(state.activeFilter.selector))
    } else if (mixer) {
      const { selector } = mixer.getState().activeFilter
      selector.includes(filter)
        ? mixer.toggleOff(`.${filter}`).then(state => setSelectors(state.activeFilter.selector))
        : mixer.toggleOn(`.${filter}`).then(state => setSelectors(state.activeFilter.selector))
      setFilter('')
    }
  }, [displayProducts])

  useEffect(() => {
    mixer && mixer.forceRefresh()
  }, [current])

  useEffect(() => {
    mixer && mixer.sort(selected.value)
  }, [selected])

  useEffect(() => {
    const display = products.filter(prod => {
      const match = (
        selectors === '.mix'
        || selectors === ''
        || selectors.includes(removeSpace(prod.category))
        || (prod.sub && selectors.includes(removeSpace(prod.sub)))
        || (prod.series && selectors.includes(removeSpace(prod.series || '')))
      )
      return match
    })
    if (displayProducts !== display) setDisplayProducts(display)
  }, [selectors])

  useEffect(() => {
    if (displayProducts !== products) setDisplayProducts(products)
    else {
      if (filter === '') return
      if (filter === 'all' && mixer) {
        if (displayProducts !== products) setDisplayProducts(products)
        mixer.filter('all').then(state => setSelectors(state.activeFilter.selector))
      } else if (mixer) {
        console.log(filter)
        const { selector } = mixer.getState().activeFilter
        selector.includes(filter)
          ? mixer.toggleOff(`.${filter}`).then(state => setSelectors(state.activeFilter.selector))
          : mixer.toggleOn(`.${filter}`).then(state => setSelectors(state.activeFilter.selector))
      }
      setFilter('')
    }
  }, [filter])

  return (
    <div className={styles['container']}>
      <Head>
        <title>Products - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Carousel data={featured} />
      <div className={`container ${styles['section-options']}`}>
        <Filter
          categories={categories || []}
          setFilter={setFilter}
          selection={selectors}
        />
        <Sorting
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <List data={displayProducts} current={current} perPage={perPage} />
      {displayProducts.length > perPage && (
        <Pagination
          list={displayProducts}
          current={current}
          setCurrent={setCurrent}
          perPage={perPage}
        />
      )}
      <Footer />
    </div>
  )
}

const Pagination = ({ list, current, setCurrent, perPage }) => {
  const [total, setTotal] = useState(1)

  useEffect(() => {
    let calc = Math.floor(list.length / perPage)
    if (list.length % perPage > 0) calc += 1
    setTotal(calc)
  }, [])

  return (
    <div className={styles['pagination']}>
      <div
        className={`${styles['prev-page']}${current === 1 ? ` ${styles['first']}` : ''}`}
        onClick={() => setCurrent(current - 1)}
      >
        &lt;
      </div>
      <div className={styles['pages']}>
        {(current - 4 > 0 && current === total) && (
          <div
            className={styles['page']}
            onClick={() => setCurrent(current - 4)}
          >
            {current - 4}
          </div>
        )}
        {(current - 3 > 0 && (current === total || current === total - 1)) && (
          <div
            className={styles['page']}
            onClick={() => setCurrent(current - 3)}
          >
            {current - 3}
          </div>
        )}
        {current - 2 > 0 && (
          <div
            className={styles['page']}
            onClick={() => setCurrent(current - 2)}
          >
            {current - 2}
          </div>
        )}
        {current - 1 > 0 && (
          <div
            className={styles['page']}
            onClick={() => setCurrent(current - 1)}
          >
            {current - 1}
          </div>
        )}
        <div className={`${styles['page']}  ${styles['current']}`}>
          {current}
        </div>
        {total >= current + 1 && (
          <div
            className={styles['page']}
            onClick={() => setCurrent(current + 1)}
          >
            {current + 1}
          </div>
        )}
        {total >= current + 2 && (
          <div
            className={styles['page']}
            onClick={() => setCurrent(current + 2)}
          >
            {current + 2}
          </div>
        )}
        {(total > current + 3 && (current === 1 || current === 2)) && (
          <div
            className={styles['page']}
            onClick={() => setCurrent(current + 3)}
          >
            {current + 3}
          </div>
        )}
        {(total > current + 4 && (current === 1)) && (
          <div
            className={styles['page']}
            onClick={() => setCurrent(current + 4)}
          >
            {current + 4}
          </div>
        )}
      </div>
      <div
        className={`${styles['next-page']}${current === total ? ` ${styles['last']}` : ''}`}
        onClick={() => setCurrent(current + 1)}
      >
        &gt;
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const productsQuery = await request(queryGetProducts)
  const products = productsQuery.data.data.getProducts
  const featuredQuery = await request(queryGetFeatureProducts)
  const featured = featuredQuery.data.data.getFeatureProducts
  const categoriesQuery = await request(queryGetCategories)
  const categoriesRough = categoriesQuery.data.data.getCategories
  const categories = await categoriesRough.map(({ name, sub, series }) => ({
    name,
    id: removeSpace(name),
    sub: sub.map(s => ({
      name: s,
      id: removeSpace(s)
    })),
    series: (series || []).map(s => ({
      name: s.name,
      id: removeSpace(s.name)
    }))
  }))

  return {
    props: { products, featured, categories }, // will be passed to the page component as props
  }
}

export default Product
