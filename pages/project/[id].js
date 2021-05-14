import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from 'styles/modules/ProjectDetails.module.scss'
import { Breadcrumbs, Footer, Header } from 'components'
// import request from 'utils/request'
// import {  } from 'utils/graphql'
import Error from '../_error'

function Project({ data, recommendations }) {
  const router = useRouter()
  const { status } = router.query

  useEffect(() => {
    document.body.className = ''
  }, [])

  if (!data || (data.isDraft && status !== 'preview')) return <Error status={404} />

  const breadcrumbs = [
    { name: 'BACK TO PROJECTS', link: '/projects' },
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
      <div className={`${styles['title']} container`}>
        <span>
          {data.name}
        </span>
      </div>
      <div className={`${styles['cover-photo']} container`} />
      <Footer />
    </div>
  )
}

export async function getStaticProps(ctx) {
  /* const { id, res } = ctx.params

  const response = await request(queryGetProductByCode, { _id: id })
  const data = response.data.data.getProductByCode
  const reList = await request(queryGetRecommendedProducts, { _id: id })
  const recommendations = reList.data.data.getRecommendedProducts
  if (!data && res) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, recommendations }, // will be passed to the page component as props
  } */

  return {
    props: {
      data: {
        name: '5 AVENUE RESIDENCE',
        location: 'CBD, SYDNEY, AUSTRALIA',
        type: 'commercial',
        year: 'nov 2019',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere elementum lacus, vel bibendum metus pulvinar id. Vestibulum vel ligula eu lacus vulputate cursus. Maecenas tincidunt accumsan massa, interdum fringilla augue pharetra id. Sed nec nibh neque. Praesent et mauris id urna egestas convallis accumsan eu neque. Maecenas in imperdiet tortor, id viverra nisl. Proin egestas augue sodales, maximus justo a, egestas purus. Aenean laoreet tempus risus.',
        primaryImg: 'dsa',
        photos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    }
  }
}

export async function getStaticPaths() {
  /* const response = await request(queryProductPaths)
  const { getAllProducts } = (response.data || {}).data

  const paths = await getAllProducts.map(product => ({
    params: { code: product.code }
  })) */

  return {
    paths: [{ params: { id: '366345' } }],
    fallback: false // See the "fallback" section below
  }
}

export default Project
