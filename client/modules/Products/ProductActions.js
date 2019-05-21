import callApi from '../../util/apiCaller';

// Export Constants
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_CART = 'ADD_CART';
export const GET_CART = 'GET_CART';
export const REMOVE_CART = 'REMOVE_CART';


// Export Actions
export function getProducts(product) {
   return {
    type: GET_PRODUCTS,
    product,
  };
}
export function fetchProducts(data) {
    return (dispatch) => {
    return callApi('getProducts','post').then(res => {
      dispatch(getProducts(res.data));
     });
  };
}
export function addcart(cart) {
	return {
  		type: ADD_CART,
  		cart,
  	};
}

export function addcartRequest(p_id) {
	return (dispatch) => {
		return callApi('createCart', 'post',{p_id:p_id}).then(res =>{
			dispatch(addcart(res.p_id));

		});
	}
}

export function getCart(cartDetails) {
  return {
    type: GET_CART,
    cartDetails,
  };

}

export function fetchCart(data) {
	return (dispatch) => {
    return callApi('getCart','post').then(res => {
      dispatch(getCart(res.data));
    });
         
  };
}

export function removeCart(r_cart) {
	return {
		type: REMOVE_CART,
		r_cart,
	}
}


export function removeCartRequest(c_id) {
	console.log('c_id',c_id)
	return (dispatch) => {
		return callApi('deleteCart', 'post', {c_id:c_id}).then(res =>{
			console.log('res',res);
			dispatch(removeCart(res.c_id));
				
		});
	}
}

