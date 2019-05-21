import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';


// Import Actions
import { fetchProducts ,getProducts} from '../ProductActions';
import { addcart, addcartRequest, fetchCart } '../../CartActions';
// Import Selectors
// import { getProducts } from '../ProductReducer';

class ProductList extends Component {
  constructor (props) {
    super(props);
    this.state ={
      limit: 4,
      search: "",
      products:[],
      count: 0,
    } 
    this.onLoadMore = this.onLoadMore.bind(this);
    this.cartItem = this.cartItem.bind(this);

    
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
  cartItem(product_id)
  {
    this.props.dispatch(addcartRequest(product_id));
    this.setState({count: this.state.count + 1})
  } 
  
  updateSearch(event) {
      this.setState({
        search: event.target.value.substr(0,20)
      }); 
  }   
	componentDidMount() {
		
    this.props.dispatch(fetchProducts());
    
   }
  
	render() {
        var products = this.state.products;

        const filterProducts = products.filter(
              (product) => {
                return product.product_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
              }
        ) 
   
		return(
			<div>
          <div className="filter_products">
              <input type="text" id="filter" placeholder='Search by Prodcuts' value={this.state.search} onChange={this.updateSearch.bind(this)}/>
              <Link to={'/cart_details'}><span className="glyphicon glyphicon-shopping-cart cart"></span><span className="count">{this.state.count}</span></Link>                
          </div> 
          <div className="container">
              {this.state.products && this.state.products.length > 0   ? 
                 	filterProducts.slice(0,this.state.limit).map((product_details, index) =>
                 	<ul className="products" key={index}>
                 	    <li><Link to={`/products_details/${product_details._id}`}><img src={product_details.image}/></Link></li> 
                      <li><Link to={`/products_details/${product_details._id}`}>{product_details.product_name }</Link></li>
                      <li>{product_details.color }</li>
                      <li>{product_details.price }</li>
                      <li>{product_details.size }</li>
                      <button className="btn2" onClick={()=>{this.cartItem(product_details._id)}}>Add Cart</button>
                 	</ul>
                  
                  )
     	      			:'No products'
              }
              {this.state.limit <= this.state.products.length ? <p><button  className="btn1" onClick={this.onLoadMore}>Load More</button></p> : <p className="no_prodcuts">No products Available</p>}
          </div>
       	</div>
		)
	}
}


ProductList.need = [() => { return fetchProducts();}];
 
function mapStateToProps(state) {
   return {
    products:state.products.data,
  };
}

export default connect(mapStateToProps)(ProductList);