import styles from 'styles/modules/Showrooms.module.scss'

function Search() {
  return (
    <div className={styles['section-search']}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className={styles['title-container']}>
              <span>SHOWROOM LOCATIONS</span>
            </div>
          </div>
          <div className="col-lg-8 only-desktop">
            <div className="row">
              <div className="col-6">
                <input
                  className=""
                  /* value={search}
                  onChange={({ target }) => setSearch(target.value)}
                  onKeyDown={e => (e.key === 'Enter') && searchFunction()} */
                  placeholder="ENTER POSTCODE OR SUBURB"
                />
              </div>
              <div className="col-6">
                <button type="submit" className="button-contained" style={{ width: '50%' }}>
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
