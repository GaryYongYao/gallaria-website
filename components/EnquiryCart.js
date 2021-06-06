import { useContext } from 'react'
import { sumBy } from 'lodash'
import Cookies from 'js-cookie'
import { ContactContext } from 'components/ContactWindow'
import { EnquiryContext } from 'utils/enquiryCookie'
import Link from './Link'

function EnquiryCart({ openEnquiry, setOpenEnquiry }) {
  const { setContactOpen } = useContext(ContactContext)
  const { enquiryAmount, setEnquiryAmount, enquiryCart, setEnquiryCart } = useContext(EnquiryContext)

  const removeItem = (e, i) => {
    e.preventDefault()
    const enquiries = JSON.parse(Cookies.get('enquiries'))
    enquiries.splice(i, 1)
    Cookies.set('enquiries', enquiries)

    setEnquiryCart(JSON.parse(Cookies.get('enquiries')))
    setEnquiryAmount(JSON.parse(Cookies.get('enquiries')).length)
  }

  return (
    <>
      <div className={`overlay${openEnquiry ? ' open' : ''}`} />
      <div className={`enquiry-cart${openEnquiry ? ' open' : ''}`}>
        <div className="cart-title">
          <span>
            ENQUIRY {enquiryAmount > 0 && `( ${enquiryAmount} )`}
          </span>
          <img src="/svg/inverted-close.svg" alt="close" onClick={() => setOpenEnquiry(false)} />
        </div>
        <div className="blank" />
        <div className="cart-items">
          {enquiryAmount < 1 && (
            <span className="no-item">
              No product is added to enquiry cart
            </span>
          )}
          {enquiryAmount > 0 && enquiryCart.map((item, i) => (
            <div key={item.code} className="item">
              <div className="image-container">
                <Link href={`/product/${item.code}`}>
                  <img width="100%" src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(item.image).replace('(', '%28').replace(')', '%29')}`} />
                </Link>
              </div>
              <div className="text-container">
                <div className="title">
                  <Link href={`/product/${item.code}`}>
                    {item.name}
                  </Link>
                </div>
                <div className="info">
                  AUD: ${item.price.toFixed(2)}
                  <br />
                  QTY: {item.quantity}
                </div>
                <div className="remove">
                  <a href="#" onClick={(e) => removeItem(e, i)}>
                    REMOVE
                  </a>
                  <a href="#" onClick={(e) => removeItem(e, i)}>
                    <img src="/svg/inverted-bin.svg" alt="remove" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="total-container row">
          <div className="col-6">
            SUBTOTAL:
          </div>
          <div className="col-6 value">
            AUD ${sumBy(enquiryCart, item => item.price * item.quantity).toFixed(2)}
          </div>
        </div>
        <Link href="/enquiry" style="button-contained white" customStyle={{ display: 'block' }}>
          ENQUIRE NOW
        </Link>
        <div className="contact">
          FOR GENERAL ENQUIRY, PLEASE
          <br />
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              setContactOpen(true)
            }}
          >
            <span>CONTACT US</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default EnquiryCart
