import axios from 'axios';

export const getAllProducts = async () => {
  const productsResponse = await axios.get('./mockedApi/products.json');
  return productsResponse.data.products;
};
