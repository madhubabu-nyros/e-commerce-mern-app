import { GET_PRODUCTS } from './ProductActions';

// Initial State
const initialState = { data: [],cart:[], };

const ProductReducer = (state = initialState, action) => {
   switch (action.type) {
  	  case GET_PRODUCTS :
      return {
      	...state,
        data: action.product,
        
      };      
    default:
    return state;
  }

};


export default ProductReducer;