import { useEffect, useState } from 'react';
import ProductsListview from '../components/productsListview';
import { getAllProducts } from '../services/products';
import ProductsCartButton from '../components/productsCartButton';
import { addProductCart } from '../services/products';
import MessageSnackbar from "../components/messageSnackbar";

export default function Home( props ) {
  const { cartListItems, setCartListItems } = props;
  const [ products, setProducts ] = useState();
  const [ showSnackbar, setShowSnackbar ] = useState(false);
  const [ snackbarMessage, setSnackbarMessage ] = useState({});

  const setProductsList = async () => {
    const productsList = await getAllProducts();
    return productsList
  }

  const addProduct = ( product ) => {
    const snackbarMessage = addProductCart(product, cartListItems, setCartListItems);
    setSnackbarMessage(snackbarMessage);
    setShowSnackbar(true)
  }

  useEffect(  () => {
    setProductsList().then( (response) => {
      setProducts(response);
    });
  }, []);

  return (
    <>
      <MessageSnackbar open={showSnackbar} setOpen={setShowSnackbar} snackbarMessage={snackbarMessage}/>
      <ProductsListview
        products={products}
        cartListItems={cartListItems}
        productCartAction={addProduct}
      >
        <ProductsCartButton badgeCounter={cartListItems.length}/>
      </ProductsListview>
    </>
  );
};
