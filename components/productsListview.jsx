import ProductPreviewCard from './productPreviewCard';

const ProductsListview = ( props ) => {
  const { products, cartListItems, children, productCartAction } = props;

  return(
    <div className="bg-white mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-4">
      {children}

      <div className="products-container">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products?.map((product, index) => (
              <div key={`product-container-${index}`} >
                <ProductPreviewCard
                  product={product}
                  cartListItems={cartListItems}
                  productCartAction={productCartAction}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsListview;
