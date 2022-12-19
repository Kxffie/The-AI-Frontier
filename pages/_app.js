import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className=''>{children}</div>
    <Footer />
  </div>
)

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>The AI Frontier</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="The AI Frontier" property="og:title" />
        <meta content="Our blog covers the latest trends and developments in coding and AI. From programming languages to machine learning, we share insights and experiences on a wide range of topics. Whether you're a seasoned developer or just starting out, we hope you'll find our blog a valuable resource." property="og:description" />
        <meta content="https://the-ai-frontier.vercel.app/" property="og:url" />
        <meta content="https://the-ai-frontier.vercel.app/favicon.jpg" property="og:image" />
        <meta content="#8B5CF6" data-react-helmet="true" name="theme-color" />
      </Head>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </Layout>
  )
}

export default MyApp