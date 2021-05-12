import styles from 'styles/modules/Showrooms.module.scss'

function List({ list, selected, setSelected, setZoom, setCenter, scrollToTop }) {
  return (
    <div className={`${styles['location-container']} col-lg-4`}>
      <div className={`${styles['location-box']} ${styles['selected']} only-mobile`}>
        <div className={styles['location-title']}>{selected.name}</div>
        <div className={styles['location-divider']} />
        <div className={`${styles['location-content']} ${styles['location-address']}`}>{selected.address}</div>
        <div className={`${styles['location-content']} ${styles['location-phone']}`}>{selected.phone}</div>
        {selected.website && (
          <div className={styles['location-website']}>
            <a
              href={selected.website}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
            >
              VIEW WEBSITE
              <img src="/svg/left-arrow.svg" width="6px" />
            </a>
          </div>
        )}
      </div>
      {list.map(l => (
        <div
          key={l.name}
          className={`${styles['location-box']}${selected.name === l.name ? ` ${styles['selected']}` : ''}`}
          onClick={() => {
            setZoom(12)
            setCenter(l.position)
            if (screen.width < 992) scrollToTop()
            setSelected(l)
          }}
        >
          <div className={styles['location-title']}>{l.name}</div>
          <div className={styles['location-divider']} />
          <div className={`${styles['location-content']} ${styles['location-address']}`}>{l.address}</div>
          <div className={`${styles['location-content']} ${styles['location-phone']}`}>{l.phone}</div>
          <div className={styles['location-website']}>
            <a
              href={l.website}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
            >
              VIEW WEBSITE
              <img src="/svg/left-arrow.svg" width="6px" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
