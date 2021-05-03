import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from 'styles/modules/ProductList.module.scss'
import { Carousel, List } from 'sections/ProductList'
import { DropdownUnderline, Footer, Header } from 'components'
import request from 'utils/request'
import { queryGetProducts, queryGetFeatureProducts } from 'utils/graphql'

function Product({ products, featured }) {
  const [mixer, setMixer] = useState(() => {})
  const [selected, setSelected] = useState({ name: 'Default', value: 'default:asc' })

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

    setMixer(mixitup(containerEl))
  }, [])

  useEffect(() => {
    mixer && mixer.sort(selected.value)
  }, [selected])

  return (
    <div className={styles['container']}>
      <Head>
        <title>Products - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Carousel data={featured} />
      <div className={`container ${styles['section-options']}`}>
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

export async function getStaticProps() {
  const response = await request(queryGetProducts)
  const products = response.data.data.getProducts
  const query = await request(queryGetFeatureProducts)
  const featured = query.data.data.getFeatureProducts

  return {
    props: { products, featured }, // will be passed to the page component as props
  }
}

export default Product
