import Head from 'next/head'
import { useContext } from 'react'
import { Footer, Header } from 'components'
import { EnquiryContext } from 'utils/enquiryCookie'
import { Form, List, NoItem } from 'sections/Enquiry'
import styles from 'styles/modules/Enquiries.module.scss'

function Projects() {
  const { enquiryAmount } = useContext(EnquiryContext)

  return (
    <div className={styles['container']}>
      <Head>
        <title>Enquiries Cart - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={styles['section-title']}>
        <div className="container">
          <div className={styles['title']}>
            ENQUIRIES {enquiryAmount > 0 && `(${enquiryAmount})`}
          </div>
        </div>
      </section>

      {enquiryAmount < 1 && <NoItem />}
      {enquiryAmount > 0 && <List />}
      {enquiryAmount > 0 && <Form />}
      <Footer />
    </div>
  )
}

export default Projects
