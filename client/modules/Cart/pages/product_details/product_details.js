import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Import Actions
import { addcart, addcartRequest, fetchCart } from '../../CartActions';
import { fetchProducts ,getProducts } from '../../../Products/ProductActions';

class CartProdcuts extends Component {
  constructor (props) {
    super(props);
    this.state ={
      limit: 4,
      search: "",
      products:[],
      count: 0,
    } 
    this.onLoadMore = this.onLoadMore.bind(this);
    
  }  
  onLoadMore() {
        
      this.setState({
         limit: this.state.limit + 4,
      });
      
  } 
  componentWillReceiveProps(nextProps){
   
    if(nextProps && nextProps.products)
    {
      this.setState({products:nextProps.products});
    }
  }
     
  componentDidMount() {
    
    this.props.dispatch(fetchProducts());
    
  }
  
  render() {
  
   
    return(
      <div className="container">
            <h1 Style="margin-left: 74px;">Product Details</h1> 
            {this.state.products && this.state.products.length > 0 ?
            this.state.products.filter(mobile=> mobile._id==this.props.params.id).map((product_details, index)=>
            <div key={index}>
               <table Style= "margin-top:65px;">
                <tbody>
                  <tr>
                      <td><img className="img" src={product_details.image} alt="image"/></td>
                          <td valign="top">
                        <p Style="font-size: 20px;">{product_details.product_name}</p>
                        <p><span Style="color:gray">Price:</span>&nbsp; <span Style="color:#b12d38">{product_details.price}</span></p>
                        <p><span Style="color:gray">Color:</span>&nbsp;<b>{product_details.color}</b></p>
                        <p className="discription">{product_details.discription1}</p>
                        <p className="discription">{product_details.discription2}</p>
                        <p className="discription">{product_details.discription3}</p>
                        <p className="discription">{product_details.discription4}</p>
                        <p className="discription">{product_details.discription5}</p>
                        <p className="discription">{product_details.discription6}</p>
                        <p className="discription">{product_details.discription7}</p>
                        <Link to='http://10.90.90.71:8000/cart_details'><button className="btn2">Back to Cart</button></Link>
                     </td>
                  </tr> 
                </tbody>
              </table>           
            </div>
            ): ''}
        </div>
    )
  }
}


CartProdcuts.need = [() => { return fetchProducts();}];
 
function mapStateToProps(state) {
   return {
    products:state.products.data,
    
  };
}

export default connect(mapStateToProps)(CartProdcuts);