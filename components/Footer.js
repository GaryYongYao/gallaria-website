import Link from './Link'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-left">
          <div className="navigation">
            <Link href="/">
              ABOUT GALLARIA
            </Link>
            <Link href="/products">
              PRODUCTS
            </Link>
            <Link href="/">
              PROJECTS
            </Link>
            <Link href="/">
              SHOWROOM
            </Link>
            <Link href="/">
              CONTACT
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-container">
            <a target="_blank" href="https://www.instagram.com/gallariaaustralia/" rel="noopener noreferrer">
              <img src="/svg/insta.svg" alt="Instagram" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/gallaria-bathware/" rel="noopener noreferrer">
              <img src="/svg/linkedIn.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mobile-break">
        <div className="footer-left">
          <div className="phone-container">
            <p className="contact-text">(02) 8985 2619 / 1300 961 239</p>
          </div>
          <div className="email-container">
            <p className="contact-text">INFO@GALLARIA.COM.AU</p>
          </div>
          <div className="address-container">
            <div className="address-half">
              <div className="address">
                <p>HEAD OFFICE:</p>
                <p>27 HELLES AVENUE,</p>
                <p>MOOREBANK, NSW 2170</p>
              </div>
            </div>
            <div className="address-half">
              <div className="address">
                <p>SYDNEY SHOWROOM:</p>
                <p>1F DANKS STREET,</p>
                <p>WATERLOO, NSW 2017</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <img src="/svg/logo-black.svg" alt="Logo" className="footer-logo" />
          <div className="company">
            <p>©2021 GALLARIA PTY. LTD.</p>
            <p>ALL COPYRIGHTS RESERVED.</p>
          </div>
          <div className="terms-links">
            <Link href="/">
              PRIVACY POLICY
            </Link>
            <span>/</span>
            <Link href="/">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
