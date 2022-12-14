import { Provider } from "react-redux";
import {store} from "../redux/store"
import Layout from "../components/Layout";


import "../styles/main.scss";

  
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp
