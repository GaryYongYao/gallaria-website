import HeadMeta from 'components/HeadMeta'
import Header from 'components/Header'
import Footer from 'components/Footer'

function NotFound() {
  return (
    <div>
      <HeadMeta
        title="Page Not Found -  Gallaria"
        keywords="page not found, error 404, 404, error"
        robots="noindex, nofollow"
      />

      <Header />

      <Footer />
    </div>
  )
}

export default NotFound
