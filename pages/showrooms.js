import Head from 'next/head'
import { sumBy } from 'lodash'
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Footer, Header } from 'components'
import { List, Map, Search } from 'sections/Showroom'
import { filterRegex } from 'utils/validation'
import styles from 'styles/modules/Showrooms.module.scss'

const DATA = [
  {
    name: 'CASS Brothers Waverley',
    address: '82 Carrington Rd, Waverley NSW 2024',
    phone: '(02) 8999 7278',
    position: [-33.900082, 151.253924]
  },
  {
    name: 'ACS Designer Bathroom',
    address: '229 Swan St, Richmond VIC 3121',
    phone: '+61 1300 898 889',
    position: [-37.825748, 144.999945],
    website: 'https://www.acsbathrooms.com.au/'
  },
  {
    name: 'JNK Bathroom & Plumbing Supplies',
    address: '104-116 Canterbury Rd, Hurlstone Park NSW 2193',
    phone: '(02) 9554 6025',
    position: [-33.908518, 151.125079],
    website: 'https://jnkonline.com.au/'
  },
  {
    name: 'OXFORD BATHROOMS BROOKVALE',
    address: '549 Pittwater Rd, Brookvale NSW 2100',
    phone: '02-94847500',
    position: [-33.76078, 151.276236],
    website: 'https://www.oxfordbathrooms.com.au/'
  },
  {
    name: 'OXFORD BATHROOMS THORNLEIGH',
    address: '295 – 299 Pennant Hills Rd, Thornleigh NSW 2120',
    phone: '(02) 9484 7500',
    position: [-33.732313, 151.079421],
    website: 'https://www.oxfordbathrooms.com.au/'
  }
]

function Showroom() {
  const [list] = useState(DATA)
  const [displayList, setDisplayList] = useState(DATA)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(DATA[0])
  const [zoom, setZoom] = useState(8)
  const centerCal = [sumBy(DATA, o => o.position[0]) / DATA.length, sumBy(DATA, o => o.position[1]) / DATA.length]
  const [center, setCenter] = useState(centerCal)

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
    if (screen.width < 992) scrollToTop()
    setDisplayList(display)
    setSelected(display[0])
    setZoom(12)
    setCenter(display[0].position)
  }

  return (
    <div className={styles['container']}>
      <Head>
        <title>Showrooms - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Search searchStore={searchStore} search={search} setSearch={setSearch} />
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

export default Showroom
