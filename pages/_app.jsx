import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [ cartListItems, setCartListItems ] = useState([]);
  return(
    <div className="page-background p-5 md:p-16">
      <Component {...pageProps} cartListItems={cartListItems} setCartListItems={setCartListItems} />
    </div>
  );
};

export default MyApp;