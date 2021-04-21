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
            <a target="_blank" href="https://www.facebook.com/gallariaAU" rel="noopener noreferrer">
              <img src="/svg/inverted-facebook.svg" alt="Facebook" className="social" />
            </a>
          </div>
          <div className="only-mobile">
            <div className={`kebab white${open ? ' opened' : ''}`} onClick={() => setOpen(!open)}>
              <div />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderWhite
