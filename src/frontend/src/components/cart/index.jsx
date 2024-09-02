import { TiShoppingCart } from "react-icons/ti";
import PropTypes from 'prop-types';

const CartButton = ({ itemCount }) => {
  return (
    <button 
      className="
        fixed bottom-6 right-6
        md:text-[40px]
        text-[30px]
        bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen
        text-whiteNormal 
        rounded-full p-4 shadow-lg 
        hover:scale-110
        transition-all duration-300 ease-in-out
      "
    >
    <TiShoppingCart />
      {itemCount > 0 && (
        <span className="
          absolute top-0 right-0 
          bg-red-600 text-white text-xs font-bold
          rounded-full h-5 w-5 flex items-center justify-center
          translate-x-1/2 translate-y-1/2
        ">
          {itemCount}
        </span>
      )}
    </button>
  );
}

CartButton.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartButton;