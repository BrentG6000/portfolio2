import MainLayout from '../components/main-layout'
import '../styles/globals.css'
import '../styles/navbar.sass'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
