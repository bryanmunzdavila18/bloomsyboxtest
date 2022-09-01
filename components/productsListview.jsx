import { useState, useEffect } from 'react';
import ProductPreviewCard from './productPreviewCard';
import { getAllProducts } from '../services/products';

const ProductsListview = () => {
  const [ products, setProducts ] = useState();

  const setProductsList = async () => {
    const productsList = await getAllProducts();
    return productsList
  }

  useEffect(  () => {
    setProductsList().then( (response) => {
      setProducts(response);
    });
  }, []);

  return(
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products?.map((product, index) => (
              <div key={`product-container-${index}`} >
                <ProductPreviewCard product={product} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsListview;
