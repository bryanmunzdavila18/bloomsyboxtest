import Image from 'next/image';

const ProductPreviewCard = ( props ) => {
  const { product } = props;
  return(
    <div className="group relative">
      <div
        className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
      >
        <div
          className="image-container h-full w-full object-cover object-center lg:h-full lg:w-full relative h-80"
        >
          <Image
            src={product.imageUrl}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            height="100%"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {product.title}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price.currencyCode} {product.price.amount}</p>
      </div>
    </div>
  );
}

export default ProductPreviewCard;
