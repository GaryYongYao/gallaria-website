import { useState } from 'react'
import { SnackbarComponent, SnackbarContext } from 'components/Snackbar'
import { ContactWindow, ContactContext } from 'components/ContactWindow'
import { TermsWindow, TermsContext } from 'components/TermsWindow'
import { EnquiryContext } from 'utils/enquiryCookie'
import { CartContext } from 'utils/cartCookie'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [enquiryAmount, setEnquiryAmount] = useState(0)
  const [cartAmount, setCartAmount] = useState(0)
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
  })
  const [contactOpen, setContactOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [terms, setTerms] = useState('policy')

  return (
    <SnackbarContext.Provider value={{ snackbarState, setSnackbarState }}>
      <ContactContext.Provider value={{ contactOpen, setContactOpen }}>
        <TermsContext.Provider value={{ termsOpen, setTermsOpen, terms, setTerms }}>
          <EnquiryContext.Provider value={{ enquiryAmount, setEnquiryAmount }}>
            <CartContext.Provider value={{ cartAmount, setCartAmount }}>
              <Component {...pageProps} />
              <SnackbarComponent />
              <ContactWindow />
              <TermsWindow />
            </CartContext.Provider>
          </EnquiryContext.Provider>
        </TermsContext.Provider>
      </ContactContext.Provider>
    </SnackbarContext.Provider>
  )
}

export default MyApp
