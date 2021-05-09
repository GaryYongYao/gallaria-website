import { useState } from 'react'
import { SnackbarComponent, SnackbarContext } from 'components/Snackbar'
import { ContactWindow, ContactContext } from 'components/ContactWindow'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
  })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <SnackbarContext.Provider value={{ snackbarState, setSnackbarState }}>
      <ContactContext.Provider value={{ contactOpen, setContactOpen }}>
        <Component {...pageProps} />
        <SnackbarComponent />
        <ContactWindow />
      </ContactContext.Provider>
    </SnackbarContext.Provider>
  )
}

export default MyApp
