import { GET_PRODUCTS, ADD_CART, GET_CART, REMOVE_CART } from './ProductActions';

// Initial State
const initialState = { data: [],cart:[], };

const ProductReducer = (state = initialState, action) => {
   switch (action.type) {
  	  case GET_PRODUCTS :
      return {
      	...state,
        data: action.product,
        
      };
      case ADD_CART :
      return {
        ...state,
        data: action.cart,
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


export default ProductReducer;