import { useState } from 'react'
import { SnackbarComponent, SnackbarContext } from 'components/Snackbar'
import { ContactWindow, ContactContext } from 'components/ContactWindow'
import { TermsWindow, TermsContext } from 'components/TermsWindow'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
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
          <Component {...pageProps} />
          <SnackbarComponent />
          <ContactWindow />
          <TermsWindow />
        </TermsContext.Provider>
      </ContactContext.Provider>
    </SnackbarContext.Provider>
  )
}

export default MyApp
