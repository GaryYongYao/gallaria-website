import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from 'styles/modules/ProductDetail.module.scss'
import { Breadcrumbs, Footer, Header } from 'components'
import { Details, Features, Gallery, Lightbox, Recommendation } from 'sections/Products'
import request from 'utils/request'
import { queryProductPaths, queryGetProductByCode, queryGetRecommendedProducts } from 'utils/graphql'
import Error from '../_error'

function Product({ data, recommendations }) {
  const router = useRouter()
  const { status } = router.query

  useEffect(() => {
    document.body.className = ''
  }, [])

  if (!data || (data.isDraft && status !== 'preview')) return <Error status={404} />
  const [selected, setSelected] = useState(data.primaryImage)
  const [open, setOpen] = useState(false)

  const breadcrumbs = [
    { name: 'BACK TO PRODUCTS', link: '/products' },
    { name: data.name }
  ]

  useEffect(() => {
    setSelected(data.primaryImage)
  }, [data.primaryImage])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <div className={styles['container']}>
      <Head>
        <title>{data.name} - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className={`container ${styles['section-main-container']}`}>
        <Gallery data={data} selected={selected} setSelected={setSelected} setOpen={setOpen} />
        <div className="col-md-1" />
        <Details data={data} />
      </div>
      {data.features.length > 0 && <Features data={data} />}
      {recommendations.length > 0 && <Recommendation recommendations={recommendations} />}
      <Lightbox
        open={open}
        selected={selected}
        setOpen={setOpen}
      />
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
  const reList = await request(queryGetRecommendedProducts, { code })
  const recommendations = reList.data.data.getRecommendedProducts
  if (!data && res) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, recommendations }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const response = await request(queryProductPaths)
  const { getAllProducts } = (response.data || {}).data

  const paths = await getAllProducts.map(product => ({
    params: { code: product.code }
  }))

  return {
    paths,
    fallback: false // See the "fallback" section below
  }
}

export default Product
