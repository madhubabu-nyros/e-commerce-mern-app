import callApi from '../../util/apiCaller';

// Export Constants
export const GET_PRODUCTS = 'GET_PRODUCTS';



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
      	console.log('res',res)
      	dispatch(getProducts(res.data));
     });
  };
}
