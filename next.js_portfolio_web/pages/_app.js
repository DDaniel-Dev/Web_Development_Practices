import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/remixicon/fonts/remixicon.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import Layout from '../components/Layout/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

