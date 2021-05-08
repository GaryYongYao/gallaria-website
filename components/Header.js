import { useContext, useState, useEffect } from 'react'
import { ContactContext } from 'components/ContactWindow'
import Link from 'components/Link'

function Header({ setAllowScrolling }) {
  const [open, setOpen] = useState(false)
  const { setContactOpen } = useContext(ContactContext)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    if (setAllowScrolling) setAllowScrolling(!open)
  }, [open])

  return (
    <header>
      <div className={`flex-center${open ? ' menu-header' : ''}`}>
        <div className="container flex-center">
          <Link href="/">
            <img src={open ? '/svg/logo-white.svg' : '/svg/logo-black.svg'} alt="Gallaria Logo" className="logo" />
          </Link>
          <div className="navigation">
            <div className="search">
              <div>
                <img src={open ? '/svg/inverted-search.svg' : '/svg/search.svg'} alt="Search" />
              </div>
              <div>
                <input required placeholder="SEARCH" />
              </div>
            </div>
            <Link href="/">
              <img src={open ? '/svg/inverted-enquiry.svg' : '/svg/enquiry.svg'} alt="Enquiry" />
            </Link>
            <Link href="/">
              <img src={open ? '/svg/inverted-shopping.svg' : '/svg/shopping.svg'} alt="Shopping" />
            </Link>
            <div>
              <div className={`kebab${open ? ' opened' : ''}`} onClick={() => setOpen(!open)}>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`menu${open ? ' open' : ''}`}>
        <div className="container">
          <div className="col-12 col-lg-4">
            <span className="title">PRODUCTS</span>
            <div className="button">
              <div>
                <Link href="/products?filterUrl=INTELLIGENT-BATHROOM" style="col-6 col-lg-3">
                  <img src="/svg/bathroom.svg" onClick={() => setOpen(false)} />
                  <span>INTELLIGENT BATHROOM</span>
                </Link>
                <Link href="/products?filterUrl=TOILET" style="col-6 col-lg-3">
                  <img src="/svg/toilet.svg" onClick={() => setOpen(false)} />
                  <span>TOILET</span>
                </Link>
              </div>
              <div>
                <Link href="/products?filterUrl=BATHING" style="col-6 col-lg-3">
                  <img src="/svg/bathing.svg" onClick={() => setOpen(false)} />
                  <span>BATHING</span>
                </Link>
                <Link href="/products?filterUrl=DESIGNplus" style="col-6 col-lg-3">
                  <img src="/svg/design.svg" onClick={() => setOpen(false)} />
                  <span>WASHING</span>
                </Link>
              </div>
              <div>
                <Link href="/products?filterUrl=WASHING" style="col-6 col-lg-3">
                  <img src="/svg/washing.svg" onClick={() => setOpen(false)} />
                  <span>DESIGN+</span>
                </Link>
                <Link href="/products?filterUrl=ACCESORIES" style="col-6 col-lg-3">
                  <img src="/svg/accessories.svg" onClick={() => setOpen(false)} />
                  <span>ACCESORIES</span>
                </Link>
              </div>
            </div>
            <div className="links-container">
              <Link href="/about-us" style="col-6 col-lg-12 links">
                <span>ABOUT GALLARIA</span>
              </Link>
              <Link href="/products?" style="col-6 col-lg-12 links">
                <span>PROJECTS</span>
              </Link>
              <Link href="/products?" style="col-6 col-lg-12 links">
                <span>SHOWROOM</span>
              </Link>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  setOpen(false)
                  setContactOpen(true)
                }}
                className="col-6 col-lg-12 links"
              >
                <span>CONTACT US</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
