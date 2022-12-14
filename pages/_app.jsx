import '../styles/globals.css';
import Layout from '../components/layout';
import CustomCursor from '../components/CustomCursor';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <CustomCursor />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
