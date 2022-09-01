import axios from 'axios';

const productActionMessages = {
  succesAddProduct: {
    message: 'Se ha agregado el producto al carrito',
    status: 'success',
  },
  warningAddProduct: {
    message: 'Este producto ya está en el carrito',
    status: 'warning'
  },
  successRemoveProduct: {
    message: 'Se removió el producto del carrito',
    status: 'warning',
  },
  errorRemoveProduct: {
    message: 'No se pudo rmeover el producto del carrito',
    status: 'error',
  },
};

export const getAllProducts = async () => {
  const mockedApiUri = './mockedApi/products.json';
  const productsResponse = await axios.get(mockedApiUri);
  return productsResponse.data.products;
};

const getCartProductIndex = ( product, cartListItems ) => {
  const productIndex = cartListItems.findIndex( (cartProduct) => (
      (cartProduct.title === product.title) &&
      (cartProduct.price.currencyCode === product.price.currencyCode) &&
      (cartProduct.price.amount === product.price.amount)
    )
  );
  return productIndex
}

export const addProductCart = ( product, cartListItems, setCartListItems ) => {
  const productIndex = getCartProductIndex(product, cartListItems)
  if (productIndex < 0) {
    setCartListItems( (cartListItem) => [...cartListItem, product])
    return (productActionMessages.succesAddProduct);
  }
  return (productActionMessages.warningAddProduct);
};
