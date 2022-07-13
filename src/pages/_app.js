import '../../styles/globals.css'
import store from '../../Store';
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp
