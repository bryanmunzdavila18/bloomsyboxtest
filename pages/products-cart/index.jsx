import { useState } from 'react';
import ProductsListview from '../../components/productsListview';
import { removeProductCart } from '../../services/products';
import MessageSnackbar from '../../components/messageSnackbar';
import HomeButtonComponent from '../../components/homeButtonComponent';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ProductsCart = ( props ) => {
  const { cartListItems, setCartListItems } = props;
  const [ showSnackbar, setShowSnackbar ] = useState(false);
  const [ snackbarMessage, setSnackbarMessage ] = useState({});
  const cardButtonContent = {
    buttonIcon: <RemoveShoppingCartIcon />,
    displayText: 'Remover del carrito',
    backgroundColorClass: 'md:bg-red-500',
  };

  const removeProduct = ( product ) => {
    const snackbarMessage = removeProductCart(product, cartListItems, setCartListItems);
    setSnackbarMessage(snackbarMessage);
    setShowSnackbar(true);
  };

  return (
    <div>
      <MessageSnackbar open={showSnackbar} setOpen={setShowSnackbar} snackbarMessage={snackbarMessage}/>
      <ProductsListview
        products={cartListItems}
        cartListItems={cartListItems}
        productCartAction={removeProduct}
        cardButtonContent={cardButtonContent}
      >
        <HomeButtonComponent cartListItems={cartListItems}/>
      </ProductsListview>
    </div>
  );
}

export default ProductsCart;
