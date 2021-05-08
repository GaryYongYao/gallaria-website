import { useContext, useEffect, useRef, createContext } from 'react'

export function ContactWindow() {
  const formRef = useRef()
  const { contactOpen, setContactOpen } = useContext(ContactContext)

  useEffect(() => {
    document.body.style.overflow = contactOpen ? 'hidden' : 'auto'
  }, [contactOpen])

  return (
    <div className={`contact-window ${contactOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="contact-window-header">
          <div className="contact-window-title">CONTACT US</div>
          <div className="contact-window-close" onClick={() => setContactOpen(false)}>
            <span>CLOSE</span>
            <img src="/svg/inverted-close.svg" alt="close" />
          </div>
        </div>
        <div className="contact-window-content row">
          <div className="col-lg-6">
            <img src="/images/contact-us.png" alt="contact-us" />
            <div className="contact-window-content-title">CONTACT US</div>
            <div className="row contact-window-contacts">
              <div className="col-6">
                <div className="image">
                  <img src="/svg/inverted-phone.svg" alt="phone" />
                </div>
                <div className="type">
                  Phone
                </div>
                <div className="value">
                  (02) 8985 2619 /<br />
                  1300 961 239
                </div>
              </div>
              <div className="col-6">
                <div className="image">
                  <img src="/svg/inverted-email.svg" alt="email" />
                </div>
                <div className="type">
                  Email
                </div>
                <div className="value">
                  INFO@GALLARIA.COM.AU
                </div>
              </div>
              <div className="col-6">
                <div className="image">
                  <img src="/svg/inverted-location.svg" alt="location" />
                </div>
                <div className="type">
                  Head Office
                </div>
                <div className="value" style={{ marginBottom: '28px' }}>
                  27 Helles Avenue,<br />Moorebank,NSW 2170
                </div>
                <div className="type">
                  Sydney Showroom
                </div>
                <div className="value">
                  1F Danks Street,<br />
                  Waterloo NSW 2017<br />
                  +61 02 8985 2666
                </div>
              </div>
              <div className="col-6">
                <div className="image">
                  <img src="/svg/inverted-opening.svg" alt="opening" />
                </div>
                <div className="type">
                  Working Hour
                </div>
                <div className="value">
                  MONDAY TO FRIDAY<br />
                  8:30AM - 4:30PM
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="enquiry-title">
              <span>ENQUIRY FORM</span>
            </div>
            <form ref={formRef}>
              <input required name="name" placeholder="NAME*" />
              <input required name="email" placeholder="EMAIL ADDRESS*" />
              <input required name="phone" placeholder="MOBILE NUMBER*" />
              <input name="company" placeholder="COMPANY'S NAME" />
              <textarea
                required
                name="message"
                placeholder="LEAVE US A MESSAGE*"
                rows={8}
              />
              <div className="button-container">
                <div className="button-contained white">
                  SEND
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ContactContext = createContext()
