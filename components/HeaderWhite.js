import { useState, useEffect } from 'react'
import Link from 'components/Link'

function HeaderWhite() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <header className="no-bg">
      <div className="flex-center">
        <div className="container flex-center ">
          <Link href="/#">
            <img src="/svg/logo-white.svg" alt="Gllaria Logo" className="logo" />
          </Link>
          <div>
            <a target="_blank" href="https://www.instagram.com/gallariaaustralia/" rel="noopener noreferrer">
              <img src="/svg/inverted-insta.svg" alt="Instagram" className="social" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/gallaria-bathware/" rel="noopener noreferrer">
              <img src="/svg/inverted-linkedIn.svg" alt="LinkedIn" className="social" />
            </a>
          </div>
          <div className="only-mobile">
            <div className={`kebab white${open ? ' opened' : ''}`} onClick={() => setOpen(!open)}>
              <div />
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
                  <img src="/svg/bathroom.svg" />
                  <span>INTELLIGENT BATHROOM</span>
                </Link>
                <Link href="/products?filterUrl=TOILET" style="col-6 col-lg-3">
                  <img src="/svg/toilet.svg" />
                  <span>TOILET</span>
                </Link>
              </div>
              <div>
                <Link href="/products?filterUrl=BATHING" style="col-6 col-lg-3">
                  <img src="/svg/bathing.svg" />
                  <span>BATHING</span>
                </Link>
                <Link href="/products?filterUrl=DESIGNplus" style="col-6 col-lg-3">
                  <img src="/svg/design.svg" />
                  <span>WASHING</span>
                </Link>
              </div>
              <div>
                <Link href="/products?filterUrl=WASHING" style="col-6 col-lg-3">
                  <img src="/svg/washing.svg" />
                  <span>DESIGN+</span>
                </Link>
                <Link href="/products?filterUrl=ACCESORIES" style="col-6 col-lg-3">
                  <img src="/svg/accessories.svg" />
                  <span>ACCESORIES</span>
                </Link>
              </div>
            </div>
            <div className="links-container">
              <Link href="/products?" style="col-6 col-lg-12 links">
                <span>ABOUT GALLARIA</span>
              </Link>
              <Link href="/products?" style="col-6 col-lg-12 links">
                <span>PROJECTS</span>
              </Link>
              <Link href="/products?" style="col-6 col-lg-12 links">
                <span>SHOWROOM</span>
              </Link>
              <Link href="/products?" style="col-6 col-lg-12 links">
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderWhite
