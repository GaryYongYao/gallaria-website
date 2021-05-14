import GoogleMapReact from 'google-map-react'
import styles from 'styles/modules/Showrooms.module.scss'
import { mapStyles } from './constant'

function Map({ list, zoom, center, searchStore, search, setSearch }) {
  return (
    <div className={`${styles['map-container']} col-lg-8`}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API }}
        options={{
          styles: mapStyles,
          mapTypeControl: false,
          streetViewControl: false
        }}
        zoom={zoom}
        center={center}
      >
        {list.map(showroom => (
          <CustomMarker
            key={showroom.name}
            lat={showroom.position[0]}
            lng={showroom.position[1]}
          />
        ))}
      </GoogleMapReact>
      <div className="only-mobile-block">
        <input
          className={styles['input-box']}
          type="search"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          onKeyDown={e => (e.key === 'Enter') && searchStore()}
          placeholder="ENTER POSTCODE OR SUBURB"
        />
        <button type="button" onClick={searchStore} className="button-contained">
          SEARCH
        </button>
      </div>
    </div>
  )
}

const CustomMarker = () => (
  <img
    src="/svg/marker.svg"
    height="61px"
    width="61px"
    style={{
      position: 'absolute',
      transform: 'translate(-50%, -100%)'
    }}
  />
)

export default Map
