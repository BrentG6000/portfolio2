import MainLayout from '../components/main-layout';
import '../styles/header.scss'
import '../styles/footer.scss';
import '../styles/app.scss';
import '../styles/box.scss';
import '../styles/contact.scss';
import '../styles/button.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
