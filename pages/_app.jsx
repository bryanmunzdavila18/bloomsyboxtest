import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [ cartListItems, setCartListItems ] = useState([]);
  return <Component {...pageProps} cartListItems={cartListItems} setCartListItems={setCartListItems} />
};

export default MyApp;
