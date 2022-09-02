import ProductPreviewCard from './productPreviewCard';

const ProductsListview = ( props ) => {
  const { products, cartListItems, children, productCartAction, cardButtonContent } = props;

  return(
    <div className="bg-white mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-4 rounded-lg">
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
                  cardButtonContent={cardButtonContent}
                />
              </div>
            ))
          }
        </div>
        {
          products?.length === 0 && (
            <h2 className="text-center">No hay productos en la lista</h2>
          )
        }
      </div>
    </div>
  );
};

export default ProductsListview;
