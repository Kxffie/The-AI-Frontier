import 'tailwindcss/tailwind.css'
import Header from '../components/Header'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp