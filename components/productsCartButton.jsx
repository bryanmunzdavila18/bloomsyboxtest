import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const ProductsCartButton = ( props ) => {
  const { badgeCounter } = props;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return(
    <div className="flex justify-end">
      <Button
        className="cart-button"
        variant="outlined"
        endIcon={
          <StyledBadge badgeContent={badgeCounter} color="secondary" className="m-1">
            <ShoppingCartIcon />
          </StyledBadge>
        }
      >
        Ver carrito
      </Button>
    </div>
  );
}

export default ProductsCartButton;
