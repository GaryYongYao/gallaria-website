import { useState } from 'react'
import { SnackbarComponent, SnackbarContext } from 'components/Snackbar'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
  })

  return (
    <SnackbarContext.Provider value={[snackbarState, setSnackbarState]}>
      <Component {...pageProps} />
      <SnackbarComponent />
    </SnackbarContext.Provider>
  )
}

export default MyApp
