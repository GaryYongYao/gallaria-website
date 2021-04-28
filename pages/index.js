import Head from 'next/head'
import styles from 'styles/modules/Home.module.scss'
import { Footer, HeaderWhite } from 'components'
import { Design, Experience, Featured, Hero, Highlight, Project } from 'sections/Home'
import request from 'utils/request'
import { queryGetFeatureProducts } from 'utils/graphql'

export default function Home({ featured }) {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderWhite />
      <Hero />
      <Highlight />
      <Experience />
      <Featured data={featured} />
      <Project />
      <Design />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const response = await request(queryGetFeatureProducts)
  const featured = response.data.data.getFeatureProducts

  return {
    props: { featured }, // will be passed to the page component as props
  }
}
