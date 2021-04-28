import Head from 'next/head'
import styles from 'styles/modules/ProductList.module.scss'
import { Carousel, List } from 'sections/ProductList'
import { Footer, Header } from 'components'
import request from 'utils/request'
import { queryGetProducts, queryGetFeatureProducts } from 'utils/graphql'

function Product({ products, featured }) {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Products - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Carousel data={featured} />
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
