import Image from 'next/image';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';

const ProductPreviewCard = ( props ) => {
  const { product, productCartAction } = props;
  const { imageUrl, title, price } = product;

  return(
    <div className="group relative">
      <div
        className="
        min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80
        "
      >
        <div className="absolute flex justify-center items-center w-full h-80 z-10 invisible group-hover:visible">
          <Button
            className={`cart-button md:bg-green-500`}
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            onClick={()=>productCartAction(product)}
          >
            Agregar al carrito
          </Button>
        </div>
        <div
          className="image-container h-full w-full object-cover object-center lg:w-full relative h-80 group-hover:blur-sm"
        >
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {title}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{price.currencyCode} {price.amount}</p>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
