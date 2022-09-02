import Link from "next/link";
import {Button} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const HomeButtonComponent = ( props ) => {
  const { cartListItems } = props;
  const totalCartListItems = cartListItems?.length || 0;
  const getCartSalesPrice = () => {
    let total = 0;
    cartListItems?.forEach( (cartListItem) => {
      console.log(cartListItem.price.amount)
      total+= parseFloat(cartListItem.price.amount);
    })
    return total
  }

  return(
    <div className="flex justify-between">
      <Link href="./">
        <Button
          className="cart-button"
          variant="outlined"
          startIcon={
            <HomeIcon />
          }
        >
          Ir al inicio
        </Button>
      </Link>
      <h2>Productos: {totalCartListItems}</h2>
      <h2>Precio total: {getCartSalesPrice()} USD</h2>
    </div>
  );
};

export default HomeButtonComponent;
