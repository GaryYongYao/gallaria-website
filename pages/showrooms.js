import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Footer, Header, HeadMeta } from 'components'
import { List, Map, Search } from 'sections/Showroom'
// import { filterRegex } from 'utils/validation'
import { getDistance } from 'geolib'
import APIRequest from 'utils/APIRequest'
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
    console.log(showrooms)
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const find_closest_markers = async (event) => {
    const markers_distances = []
    await displayList.map(async (item, i) => {
      const { position } = item
      const d = await getDistance(
        { latitude: position[0], longitude: position[1] },
        event
      )
      markers_distances[i] = { distance: d, marker: item }
    })

    const closest_markers = markers_distances.sort((a, b) => a.distance - b.distance)
    if (screen.width < 992) scrollToTop()
    setSelected(closest_markers[0].marker)
    setZoom(13)
    setCenter(closest_markers[0].marker.position)
  }

  const searchStore = () => {
    if (!search) return
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(search)}&key=${process.env.NEXT_PUBLIC_GOOGLE_API}`

    APIRequest('GET', url)
      .then(res => {
        const { results } = res.data
        const { lat, lng } = results[0].geometry.location

        find_closest_markers({ latitude: lat, longitude: lng })
      })

    /* const display = list.filter(l => (
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
    } */
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
