import axios from 'axios';

export const getAllProducts = async () => {
  const mockedApiUri = './mockedApi/products.json';
  const productsResponse = await axios.get(mockedApiUri);
  return productsResponse.data.products;
};
