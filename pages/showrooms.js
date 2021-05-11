import Head from 'next/head'
import { Footer, Header } from 'components'
import { useEffect, useState } from 'react'
import { List, Map, Search } from 'sections/Showroom'
import styles from 'styles/modules/Showrooms.module.scss'

const DATA = [
  {
    name: 'CASS Brothers Waverley',
    address: '82 Carrington Rd, Waverley NSW 2024',
    phone: '(02) 8999 7278',
    position: { lat: -33.900082, lng: 151.253924 }
  },
  {
    name: 'ACS Designer Bathroom',
    address: '229 Swan St, Richmond VIC 3121',
    phone: '+61 1300 898 889',
    position: { lat: -37.825748, lng: 144.999945 },
    website: 'https://www.acsbathrooms.com.au/'
  },
  {
    name: 'JNK Bathroom & Plumbing Supplies',
    address: '104-116 Canterbury Rd, Hurlstone Park NSW 2193',
    phone: '(02) 9554 6025',
    position: { lat: -33.908518, lng: 151.125079 },
    website: 'https://jnkonline.com.au/'
  },
  {
    name: 'OXFORD BATHROOMS BROOKVALE',
    address: '549 Pittwater Rd, Brookvale NSW 2100',
    phone: '02-94847500',
    position: { lat: -33.76078, lng: 151.276236 },
    website: 'https://www.oxfordbathrooms.com.au/'
  },
  {
    name: 'OXFORD BATHROOMS THORNLEIGH',
    address: '295 – 299 Pennant Hills Rd, Thornleigh NSW 2120',
    phone: '(02) 9484 7500',
    position: { lat: -33.732313, lng: 151.079421 },
    website: 'https://www.oxfordbathrooms.com.au/'
  }
]

function Showroom() {
  const [list] = useState(DATA)
  const [selected, setSelected] = useState(DATA[0])
  const [zoom, setZoom] = useState(17)

  useEffect(() => {
    document.body.className = ''
  }, [])

  return (
    <div className={styles['container']}>
      <Head>
        <title>Showrooms - Gallaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Search />
      <div className={styles['section-map']}>
        <div className="container">
          <div className="row flex-reverse-column-mobile">
            <List list={list} selected={selected} setSelected={setSelected} setZoom={setZoom} />
            <Map list={list} selected={selected} zoom={zoom} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Showroom
