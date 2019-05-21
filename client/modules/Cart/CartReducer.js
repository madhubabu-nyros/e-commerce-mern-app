import { ADD_CART, GET_CART, REMOVE_CART } from './CartActions';

const initialState = {  cart:[], };

const CartReducer = (state = initialState, action) => {

switch (action.type) {
	case ADD_CART :
      return {
        ...state,
        cart: action.cart,
      };
      case GET_CART :
      return {
        ...state,
        cart: action.cartDetails,
        
      };
      case REMOVE_CART :
      return {
        cart: state.cart.filter(cart=> cart.r_cart !== action.r_cart),
      };
      return
    default:
    return state;
  }

};

export default CartReducer;

