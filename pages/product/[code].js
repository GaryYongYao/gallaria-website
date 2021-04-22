import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from 'styles/modules/ProductDetail.module.scss'
import { Breadcrumbs, Footer, Header } from 'components/components'
import { Details, Gallery } from 'sections/Products/sections'
import request from 'utils/request'
import { queryGetProductByCode } from 'utils/graphql'
import Error from '../_error'

function Product({ data }) {
  const router = useRouter()
  const { status } = router.query

  if (!data || (data.isDraft && status !== 'preview')) return <Error status={404} />

  const breadcrumbs = [
    { name: 'BACK TO PRODUCTS', link: '/products' },
    { name: data.name }
  ]

  return (
    <div className={styles['container']}>
      <Head>
        <title>{data.name} - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className={`container ${styles['section-main-container']}`}>
        <Gallery data={data} />
        <Details data={data} />
      </div>
      <Footer />
    </div>
  )
}

/* Product.getInitialProps = async (ctx) => {
  try {
    const { code, res } = ctx.query

    const response = await request(queryGetProductByCode, { code })
    const data = response.data.data.getProductByCode
    if (!data && res) res.statusCode = 404

    return { data }
  } catch (err) {
    return err
  }
} */

export async function getStaticProps(ctx) {
  const { code, res } = ctx.params

  const response = await request(queryGetProductByCode, { code })
  const data = response.data.data.getProductByCode
  if (!data && res) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const response = await request(`
  query {
    getProducts {
      code
      isDraft
    }
  }
  `)

  const { getProducts } = (response.data || {}).data

  const paths = await getProducts.map(product => ({
    params: { code: product.code }
  }))

  return {
    paths,
    fallback: false // See the "fallback" section below
  }
}

export default Product
