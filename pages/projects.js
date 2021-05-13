import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer, Header, Link } from 'components'
import styles from 'styles/modules/Projects.module.scss'

const DATA = [
  {
    name: 'Project 01',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 02',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 03',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 04',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 05',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 06',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 07',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 08',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 09',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 10',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 11',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  },
  {
    name: 'Project 12',
    location: 'Sydney, Australia',
    type: 'Commercial',
    year: 'Nov 2019'
  }
]

function Projects() {
  const [list] = useState(DATA)
  const [current, setCurrent] = useState(1)
  const perPage = 10

  return (
    <div className={styles['container']}>
      <Head>
        <title>Projects - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container" style={{ height: '100%' }}>
        <div className={styles['title']}>ALL PROJECTS</div>
        <div className={`${styles['content']} row`}>
          {list.map((l, i) => (i >= ((current * perPage) - perPage) && i < current * perPage) && (
            <Link key={l.name} href={`/project/${l._id}`} style={`${styles['items']} col`}>
              <div className={styles['item-container']}>
                <div className={styles['item-overlay']} />
                <div className={styles['name']}>
                  {l.name}
                </div>
                <div className={styles['info']}>
                  <div className={styles['info-label']}>LOCATION</div>
                  {l.location}
                </div>
                <div className={styles['info']}>
                  <div className={styles['info-label']}>TYPE</div>
                  {l.type}
                </div>
                <div className={styles['info']}>
                  <div className={styles['info-label']}>YEAR</div>
                  {l.year}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {list.length > perPage && (
          <Pagination
            list={list}
            current={current}
            setCurrent={setCurrent}
            perPage={perPage}
          />
        )}
      </div>
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

export default Projects
