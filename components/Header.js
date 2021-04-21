import { useState, useEffect } from 'react'
import Link from 'components/Link'

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <header>
      <div className="flex-center">
        <div className="container flex-center">
          <Link href="/#">
            <img src="/svg/logo-black.svg" alt="Gallaria Logo" className="logo" />
          </Link>
          <div className="navigation">
            <div className="search">
              <img src="/svg/search.svg" alt="Search" />
              <div>
                <input required placeholder="Search..." />
              </div>
            </div>
            <Link href="/">
              <img src="/svg/enquiry.svg" alt="Enquiry" />
            </Link>
            <Link href="/">
              <img src="/svg/shopping.svg" alt="Shopping" />
            </Link>
            <div>
              <div className={`kebab${open ? ' opened' : ''}`} onClick={() => setOpen(!open)}>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
