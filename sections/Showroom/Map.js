import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import styles from 'styles/modules/Showrooms.module.scss'
import { mapStyles } from './constant'

function Map({ list, selected, zoom }) {
  return (
    <div className={`${styles['map-container']} col-lg-8`}>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API}&v=3.exp`}
        loadingElement={<div style={{ paddingTop: '100%' }} />}
        containerElement={<div className={styles['map-box']} />}
        mapElement={<div style={{ height: '100%' }} />}
        showrooms={list}
        selected={selected}
        zoom={zoom}
      />
      <div className="only-mobile">
        <input
          className={styles['input-box']}
          /* value={search}
          onChange={({ target }) => setSearch(target.value)}
          onKeyDown={e => (e.key === 'Enter') && searchFunction()} */
          placeholder="ENTER POSTCODE OR SUBURB"
        />
        <button type="submit" className="button-contained">
          SEARCH
        </button>
      </div>
    </div>
  )
}

const CustomMarker = ({ position }) => (
  <Marker
    icon={{
      url: '/svg/marker.svg',
      scaledSize: new google.maps.Size(51, 51)
    }}
    position={position}
  />
)

const MapComponent = withScriptjs(withGoogleMap(({ showrooms, selected, zoom }) => (
  <GoogleMap
    defaultOptions={{
      styles: mapStyles,
      mapTypeControl: false,
      streetViewControl: false
    }}
    defaultZoom={zoom}
    zoom={zoom}
    defaultCenter={selected.position}
    center={selected.position}
  >
    {showrooms.map(showroom => (
      <CustomMarker position={showroom.position} />
    ))}
  </GoogleMap>
)))

export default Map
