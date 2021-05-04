import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from 'styles/modules/ProductList.module.scss'
import { Carousel, Filter, List } from 'sections/ProductList'
import { DropdownUnderline, Footer, Header } from 'components'
import request from 'utils/request'
import { queryGetProducts, queryGetFeatureProducts, queryGetCategories } from 'utils/graphql'
import { removeSpace } from 'utils/validation'

function Product({ products, featured, categories }) {
  const router = useRouter()
  const [mixer, setMixer] = useState(() => {})
  const [selected, setSelected] = useState({ name: 'Default', value: 'default:asc' })
  const [filter, setFilter] = useState('')
  const [selectors, setSelectors] = useState('')

  const variants = [
    { name: 'Default', value: 'default:asc' },
    { name: 'A - Z', value: 'name:asc' },
    { name: 'Z - A', value: 'name:desc' },
    { name: 'DATE:  NEW - OLD', value: 'date:desc' },
    { name: 'DATE:  OLD - NEW', value: 'date:asc' }
  ]

  useEffect(() => {
    // eslint-disable-next-line
    const mixitup = require('mixitup')
    const containerEl = document.querySelector('.masonry')
    const masonryAnimate = mixitup(containerEl)
    router.query.filterUrl && masonryAnimate.toggleOn(`.${removeSpace(router.query.filterUrl)}`).then(state => setSelectors(state.activeFilter.selector))

    setMixer(masonryAnimate)
  }, [])

  useEffect(() => {
    mixer && mixer.sort(selected.value)
  }, [selected])

  useEffect(() => {
    if (filter === '') return
    if (filter === 'all' && mixer) {
      mixer.filter('all').then(state => setSelectors(state.activeFilter.selector))
    } else if (mixer) {
      const { selector } = mixer.getState().activeFilter
      selector.includes(filter)
        ? mixer.toggleOff(`.${filter}`).then(state => setSelectors(state.activeFilter.selector))
        : mixer.toggleOn(`.${filter}`).then(state => setSelectors(state.activeFilter.selector))
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
        <div className={styles['sorting']}>
          <span>Sort By: </span>
          <DropdownUnderline
            value={selected.name}
            items={variants}
            setValue={setSelected}
          />
        </div>
      </div>
      <List data={products} />
      <Footer />
    </div>
  )
}

export async function getStaticProps(ctx) {
  console.log(ctx.params)
  const productsQuery = await request(queryGetProducts)
  const products = productsQuery.data.data.getProducts
  const featuredQuery = await request(queryGetFeatureProducts)
  const featured = featuredQuery.data.data.getFeatureProducts
  const categoriesQuery = await request(queryGetCategories)
  const categoriesRough = categoriesQuery.data.data.getCategories
  const categories = await categoriesRough.map(({ name, sub }) => ({
    name,
    id: removeSpace(name),
    sub: sub.map(s => ({
      name: s,
      id: removeSpace(s)
    }))
  }))

  return {
    props: { products, featured, categories }, // will be passed to the page component as props
  }
}

export default Product
