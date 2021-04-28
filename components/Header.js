import { useState, useEffect } from 'react'
import Link from 'components/Link'

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <header>
      <div className={`flex-center${open ? ' menu-header' : ''}`}>
        <div className="container flex-center">
          <Link href="/#">
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
          <div className="col-lg-4">
            <span className="title">PRODUCTS</span>
            <div className="button">
              <div>
                <Link href="/products?" style="col-lg-3">
                  <img src="/svg/bathroom.svg" />
                  <span>INTELLIGENT BATHROOM</span>
                </Link>
                <Link href="/products?" style="col-lg-3">
                  <img src="/svg/toilet.svg" />
                  <span>TOILET</span>
                </Link>
              </div>
              <div>
                <Link href="/products?" style="col-lg-3">
                  <img src="/svg/bathing.svg" />
                  <span>BATHING</span>
                </Link>
                <Link href="/products?" style="col-lg-3">
                  <img src="/svg/design.svg" />
                  <span>WASHING</span>
                </Link>
              </div>
              <div>
                <Link href="/products?" style="col-lg-3">
                  <img src="/svg/washing.svg" />
                  <span>DESIGN+</span>
                </Link>
                <Link href="/products?" style="col-lg-3">
                  <img src="/svg/accessories.svg" />
                  <span>ACCESORIES</span>
                </Link>
              </div>
            </div>
            <div className="links-container">
              <Link href="/products?" style="col-5 col-lg-12 links">
                <span>ABOUT GALLARIA</span>
              </Link>
              <Link href="/products?" style="col-5 col-lg-12 links">
                <span>PROJECTS</span>
              </Link>
              <Link href="/products?" style="col-5 col-lg-12 links">
                <span>SHOWROOM</span>
              </Link>
              <Link href="/products?" style="col-5 col-lg-12 links">
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
