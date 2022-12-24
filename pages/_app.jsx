import '../styles/globals.css';
import Layout from '../components/layout';
import CustomCursor from '../components/CustomCursor';
import CursorManager from '../components/CursorManager';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <CursorManager>
      <CustomCursor />
      {getLayout(<Component {...pageProps} />)}
    </CursorManager>
  );
}

export default MyApp;
