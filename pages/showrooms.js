import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Footer, Header, HeadMeta } from 'components'
import { List, Map, Search } from 'sections/Showroom'
import { filterRegex } from 'utils/validation'
import request from 'utils/request'
import { queryGetLocations } from 'utils/graphql'
import styles from 'styles/modules/Showrooms.module.scss'

function Showroom({ showrooms }) {
  const [list] = useState(showrooms)
  const [displayList, setDisplayList] = useState(showrooms)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(showrooms[0])
  const [zoom, setZoom] = useState(13)
  const [center, setCenter] = useState(showrooms[0].position)

  useEffect(() => {
    document.body.className = ''
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const searchStore = () => {
    if (!search) return
    const display = list.filter(l => (
      filterRegex(search, l.address)
      || filterRegex(search, l.name)
    ))
    setDisplayList(display)
    if (display.length > 0) {
      if (screen.width < 992) scrollToTop()
      setSelected(display[0])
      setZoom(13)
      setCenter(display[0].position)
    } else {
      setSelected({})
      setZoom()
      setCenter([-25.274398, 133.775136])
    }
  }

  const clearSearch = (v) => {
    setSearch(v)
    if (v === '')setDisplayList(list)
  }

  return (
    <div className={styles['container']}>
      <HeadMeta
        title="Showrooms - Gallaria"
        desc="Intelligent Toilets by Gallaria; Visit one of our many showrooms across Australia to view our products, Or call us - (02) 8985 2619"
        keywords=""
        robots="index, follow"
        url="https://www.gallaria.com.au/showrooms"
        metaOG="/logo.png"
        metaTwitter="/logo.png"
      />

      <Header />
      <Search searchStore={searchStore} search={search} setSearch={clearSearch} />
      <div className={styles['section-map']}>
        <div className="container">
          <div className="row flex-reverse-column-mobile">
            <List
              list={displayList}
              selected={selected}
              setSelected={setSelected}
              setZoom={setZoom}
              setCenter={setCenter}
              scrollToTop={scrollToTop}
            />
            <Map
              list={displayList}
              zoom={zoom}
              center={center}
              searchStore={searchStore}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const locationsQuery = await request(queryGetLocations)
  const showrooms = locationsQuery.data.data.getLocations

  return {
    props: { showrooms }, // will be passed to the page component as props
  }
}

export default Showroom
