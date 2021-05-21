import { useContext } from 'react'
import Cookies from 'js-cookie'
import { EnquiryContext } from 'utils/enquiryCookie'
import Link from './Link'

function EnquiryCart({ openEnquiry, setOpenEnquiry }) {
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
    <div className={`enquiry-cart${openEnquiry ? ' open' : ''}`}>
      <div className="cart-title">
        <span>
          ENQUIRY {enquiryAmount > 0 && `( ${enquiryAmount} )`}
        </span>
        <img src="/svg/inverted-close.svg" alt="close" onClick={() => setOpenEnquiry(false)} />
      </div>
      <div className="divider" />
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
      <Link href="/enquiry" style="button-outlined white" customStyle={{ display: 'block' }}>
        VIEW ENQUIRIES
      </Link>
    </div>
  )
}

export default EnquiryCart
