import { SnackbarProvider } from 'notistack'
import { useEffect, useState } from 'react'
import '../styles/globals.css'
import { StoreProvider } from '../utils/Store'

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  if (!showChild) {
    return null;
  }
  return (<SnackbarProvider anchorOrigin={{ vetical: 'top', horizontal: 'center'}}>
              <StoreProvider>
                  <Component {...pageProps} />
              </StoreProvider>
          </SnackbarProvider>)
}

export default MyApp
