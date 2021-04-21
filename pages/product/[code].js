import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from 'styles/modules/ProductDetail.module.scss'
import { Breadcrumbs, Footer, Header } from 'components/components'
import { Details, Gallery } from 'sections/Products/sections'
import request from 'utils/request'
import { queryGetProductByCode } from 'utils/graphql'
import Error from '../_error'

function Home({ data }) {
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

Home.getInitialProps = async (ctx) => {
  try {
    const { code, res } = ctx.query

    const response = await request(queryGetProductByCode, { code })
    const data = response.data.data.getProductByCode
    if (!data && res) res.statusCode = 404

    return { data }
  } catch (err) {
    return err
  }
}

export default Home
