import Link from "next/link";
import {Button} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const HomeButtonComponent = () => {
  return(
    <div className="flex justify-start">
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
    </div>
  );
};

export default HomeButtonComponent;
