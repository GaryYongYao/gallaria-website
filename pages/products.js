import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { useRouter } from 'next/router'
import styles from 'styles/modules/ProductList.module.scss'
import { Carousel, Filter, List, Sorting } from 'sections/ProductList'
import { Footer, Header, HeadMeta } from 'components'
import request from 'utils/request'
import { queryGetProducts, queryGetCarouselProducts, queryGetCategories } from 'utils/graphql'
import { removeSpace, filterURLRegex } from 'utils/validation'

function Product({ products, featured, categories }) {
  const router = useRouter()
  const [mixer, setMixer] = useState(() => {})
  const [selected, setSelected] = useState({ name: 'DEFAULT', value: 'default:asc' })
  const [filter, setFilter] = useState('')
  const [toFilterOff, setFilterOff] = useState([])
  const [displayProducts, setDisplayProducts] = useState(products)
  const [selectors, setSelectors] = useState('')
  const [multiFilterClass, setMultiFilterClass] = useState('')
  const [current, setCurrent] = useState(1)
  const perPage = 30

  useEffect(() => {
    const { query } = router
    document.body.className = ''
    // eslint-disable-next-line
    const mixitup = require('mixitup')
    const containerEl = document.querySelector('.masonry')
    const masonryAnimate = mixitup(containerEl, {
      animation: {
        effects: 'fade translateZ(-100px)',
        easing: 'ease-in-out'
      },
      controls: {
        toggleLogic: 'and'
      }
    })
    !(query.search && query.filterUrl) && masonryAnimate.filter('.page-1')
    query.filterUrl && masonryAnimate.filter(`.${removeSpace(query.filterUrl)}`).then(state => {
      filterProducts(state.activeFilter.selector)
      setSelectors(state.activeFilter.selector)
    })
    if (query.search) {
      masonryAnimate.filter('all').then(() => {
        const toFilter = []
        const format = removeSpace(query.search)
        const re = new RegExp(format, 'i');

        [].forEach.call(document.getElementsByClassName('mix'), ele => {
          [].forEach.call(ele.classList, eleClass => {
            if (re.test(eleClass)) {
              toFilter.push(`.${eleClass}`)
            }
          })
        })
        masonryAnimate.toggleOn(toFilter.join(', ')).then(state => {
          filterProducts(state.activeFilter.selector)
          setSelectors(state.activeFilter.selector)
        })
        const display = products.filter(prod => {
          const match = (
            filterURLRegex(query.search, prod.name)
            || filterURLRegex(query.search, prod.code)
            || filterURLRegex(query.search, prod.category)
            || filterURLRegex(query.search, prod.sub)
            || filterURLRegex(query.search, prod.series)
          )
          return match
        })
        setDisplayProducts(display)
      })
    }

    setMixer(masonryAnimate)
  }, [])

  useEffect(() => {
    const { query } = router
    if (query.filterUrl && mixer) {
      mixer.filter(`.${removeSpace(query.filterUrl)}`).then(state => {
        filterProducts(state.activeFilter.selector)
        setSelectors(state.activeFilter.selector)
      })
    }
    if (query.search && mixer) {
      mixer.filter('all').then(() => {
        const toFilter = []
        const format = removeSpace(query.search)
        const re = new RegExp(format, 'i');

        [].forEach.call(document.getElementsByClassName('mix'), ele => {
          [].forEach.call(ele.classList, eleClass => {
            if (re.test(eleClass)) {
              toFilter.push(`.${eleClass}`)
            }
          })
        })
        mixer.toggleOn(toFilter.join(', ')).then(state => setSelectors(state.activeFilter.selector))
        const display = products.filter(prod => {
          const match = (
            filterURLRegex(query.search, prod.name)
            || filterURLRegex(query.search, prod.code)
            || filterURLRegex(query.search, prod.category)
            || filterURLRegex(query.search, prod.sub)
            || filterURLRegex(query.search, prod.series)
          )
          return match
        })
        setDisplayProducts(display)
      })
    }
  }, [router])

  const changePage = (next) => {
    scroll.scrollToTop()
    mixer.toggleOn(`.page-${next}`).then(() => {
      setCurrent(prev => {
        mixer.toggleOff(`.page-${prev}`).then(state => {
          setSelectors(state.activeFilter.selector)
        })

        return next
      })
    })
  }

  useEffect(() => {
    mixer && mixer.sort(selected.value)
  }, [selected])

  useEffect(() => {
    mixer && mixer.toggleOn('.page-1').then(state => setSelectors(state.activeFilter.selector))
  }, [displayProducts])

  const filterProducts = (currentSelectors) => {
    const display = products.filter(prod => {
      const match = (
        currentSelectors === '.mix'
        || currentSelectors === ''
        || currentSelectors.includes(removeSpace(prod.category))
        || (prod.sub && currentSelectors.includes(removeSpace(prod.sub)))
        || (prod.series && currentSelectors.includes(removeSpace(prod.series || '')))
      )
      return match
    })
    const multiFilter = currentSelectors.split('.')
    multiFilter.shift()
    setMultiFilterClass(multiFilter.join('AND'))
    setDisplayProducts(display)
  }

  useEffect(() => {
    if (mixer) mixer.filter(`.${multiFilterClass}`)
  }, [multiFilterClass])

  useEffect(() => {
    const targets = toFilterOff
    if (targets.length < 1) return
    if (targets.length > 0) {
      mixer.toggleOff(targets[0]).then(() => {
        setCurrent(prev => {
          mixer.toggleOff(`.page-${prev}`).then(state => {
            targets.length === 1 && setFilterOff([])
            filterProducts(state.activeFilter.selector)
            setSelectors(state.activeFilter.selector)
          })

          return 1
        })
      })
    }
    if (targets.length > 1) {
      mixer.toggleOff(targets[1]).then(() => {
        setCurrent(prev => {
          mixer.toggleOff(`.page-${prev}`).then(state => {
            setFilterOff([])
            filterProducts(state.activeFilter.selector)
            setSelectors(state.activeFilter.selector)
          })

          return 1
        })
      })
    }
  }, [selectors])

  useEffect(() => {
    if (filter === '') return
    if (filter === 'all' && mixer) {
      mixer.filter('.mix').then(
        setCurrent(prev => {
          mixer.toggleOff(`.page-${prev}`).then(state => {
            filterProducts(state.activeFilter.selector)
            setSelectors(state.activeFilter.selector)
          })

          return 1
        })
      )
    } else if (mixer) {
      const { selector } = mixer.getState().activeFilter
      if (selector.includes(filter)) {
        if (selector.includes('AND')) {
          const currentClassWithPage = selector.split('.')
          currentClassWithPage.shift()
          const currentClass = currentClassWithPage.filter(s => s.includes('AND'))
          const splitClass = currentClass[0].split('AND')
          const newClasses = splitClass.filter(s => !s.includes(filter))
          mixer.filter(`.${newClasses.join('AND')}`).then(() => {
            setCurrent(prev => {
              mixer.toggleOff(`.page-${prev}`).then(state => {
                filterProducts(state.activeFilter.selector)
                setSelectors(state.activeFilter.selector)
              })
              return 1
            })
          })
        } else {
          mixer.toggleOff(`.${filter}`).then(() => {
            setCurrent(prev => {
              mixer.toggleOff(`.page-${prev}`).then(state => {
                filterProducts(state.activeFilter.selector)
                setSelectors(state.activeFilter.selector)
              })
              return 1
            })
          })
        }
      } else {
        mixer.toggleOn(`.${filter}`).then(() => {
          setCurrent(prev => {
            mixer.toggleOff(`.page-${prev}`).then(state => {
              filterProducts(state.activeFilter.selector)
              setSelectors(state.activeFilter.selector)
            })

            return 1
          })
        })
      }
    }
    setFilter('')
  }, [filter])

  return (
    <div className={styles['container']}>
      <HeadMeta
        title="Products - Gallaria"
        desc="INTELLIGENT BATHROOMS BY GALLARIA"
        keywords=""
        robots="index, follow"
        url="https://www.gallaria.com.au/products"
        metaOG="/logo.png"
        metaTwitter="/logo.png"
      />

      <Header />
      <Carousel data={featured} />
      <div className={`container ${styles['section-options']}`}>
        <Filter
          categories={categories || []}
          setFilter={setFilter}
          selection={selectors}
          setFilterOff={setFilterOff}
        />
        <Sorting
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <List data={products} multiFilterClass={multiFilterClass} displayList={displayProducts} perPage={perPage} />
      {displayProducts.length > perPage && (
        <Pagination
          list={displayProducts}
          current={current}
          perPage={perPage}
          changePage={changePage}
        />
      )}
      <Footer />
    </div>
  )
}

const Pagination = ({ list, current, perPage, changePage }) => {
  const [total, setTotal] = useState(1)

  useEffect(() => {
    let calc = Math.floor(list.length / perPage)
    if (list.length % perPage > 0) calc += 1
    setTotal(calc)
  }, [list])

  return (
    <div className={styles['pagination']}>
      <div
        className={`${styles['prev-page']}${current === 1 ? ` ${styles['first']}` : ''}`}
        onClick={() => changePage(current - 1)}
      >
        &lt;
      </div>
      <div className={styles['pages']}>
        {(current - 4 > 0 && current === total) && (
          <div
            className={styles['page']}
            onClick={() => changePage(current - 4)}
          >
            {current - 4}
          </div>
        )}
        {(current - 3 > 0 && (current === total || current === total - 1)) && (
          <div
            className={styles['page']}
            onClick={() => changePage(current - 3)}
          >
            {current - 3}
          </div>
        )}
        {current - 2 > 0 && (
          <div
            className={styles['page']}
            onClick={() => changePage(current - 2)}
          >
            {current - 2}
          </div>
        )}
        {current - 1 > 0 && (
          <div
            className={styles['page']}
            onClick={() => changePage(current - 1)}
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
            onClick={() => changePage(current + 1)}
          >
            {current + 1}
          </div>
        )}
        {total >= current + 2 && (
          <div
            className={styles['page']}
            onClick={() => changePage(current + 2)}
          >
            {current + 2}
          </div>
        )}
        {(total > current + 3 && (current === 1 || current === 2)) && (
          <div
            className={styles['page']}
            onClick={() => changePage(current + 3)}
          >
            {current + 3}
          </div>
        )}
        {(total > current + 4 && (current === 1)) && (
          <div
            className={styles['page']}
            onClick={() => changePage(current + 4)}
          >
            {current + 4}
          </div>
        )}
      </div>
      <div
        className={`${styles['next-page']}${current === total ? ` ${styles['last']}` : ''}`}
        onClick={() => changePage(current + 1)}
      >
        &gt;
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const productsQuery = await request(queryGetProducts)
  const products = productsQuery.data.data.getProducts
  const featuredQuery = await request(queryGetCarouselProducts)
  const featured = featuredQuery.data.data.getCarousel
  const categoriesQuery = await request(queryGetCategories)
  const categoriesRough = categoriesQuery.data.data.getCategories
  const categories = await categoriesRough.map(({ name, sub, series }) => ({
    name,
    id: removeSpace(name),
    sub: sub.map(s => ({
      name: s,
      id: removeSpace(s)
    })),
    series: (series || []).map(s => ({
      sub: s.sub,
      name: s.name,
      id: removeSpace(s.name)
    }))
  }))

  return {
    props: { products, featured, categories }, // will be passed to the page component as props
  }
}

export default Product
