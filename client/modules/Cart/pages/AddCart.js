import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchCart, removeCartRequest} from '../CartActions';
import { Link } from 'react-router';

class AddCart extends Component {
	constructor (props) {
	    super(props);
	    this.state ={
	      cart:[],
    	}
    	this.removeItem = this.removeItem.bind(this);
	}

	removeItem(c_id)
	{   
		if (confirm('Do you want to delete this post')) {
			this.props.dispatch(removeCartRequest(c_id));
		}

	}

 	componentWillReceiveProps(nextProps){
   
	    if(nextProps && nextProps.cart) {

	      this.setState({cart:nextProps.cart});
	    }
    }
  
	componentDidMount() {

		this.props.dispatch(fetchCart());
   	}
	render() {


		return(
			<div>
			  {this.state.cart && this.state.cart.length > 0 ?
			  	this.state.cart.map((cart_details, index) =>
				  <ul className="products" key={index}>
				    <li><Link to={`/products_details/${cart_details.product_id._id}`}><img src={cart_details.product_id.image}/></Link></li>
				    <li>{cart_details.product_id.product_name}</li>
				    <li>{cart_details.product_id.color}</li>
				    <li>{cart_details.product_id.price}</li>
				    <li>{cart_details.product_id.size}</li>
				    <button className="btn2" onClick={()=>{this.removeItem(cart_details._id)}}>Remove Cart</button>
				  </ul>	
                ):'No Products'
			  }

			</div>
		)
	}
}
AddCart.need = [() => { return fetchCart();}];

function mapStateToProps(state) {
   return {
   	  cart: state.products.cart,
   	  
   };
}

export default connect(mapStateToProps)(AddCart);