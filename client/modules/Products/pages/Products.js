import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Import Actions
import { fetchProducts } from '../ProductActions';

// Import Selectors
import { getProducts } from '../ProductReducer';


class Products extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mobiles: [
         {
              id:1,
              image: '../assets/images/img_1.jpeg',
              product_name: 'moto 4G',
              color: 'Black',
              price: '11000',
              size: '32 GB',
              link: 'moto4g',

         },
         {    
              id:2,
              image: '../assets/images/img_7.jpeg',
              product_name: 'Samsung',
              color: 'Black',
              price: '15000',
              size: '32 GB',
              link: 'Samsung_Galaxy_M10',
         },
         {
              id:3,
              image: '../assets/images/img_3.jpeg',
              product_name: 'Samsung',
              color: 'Black',
              price: '7000',
              size: '16 GB',
              link: 'Samsung_Galaxy_M10',
         },
         {    
              id:4,
              image: '../assets/images/img_4.jpeg',
              product_name: 'Oppo',
              color: 'White',
              price: '18000',
              size: '32 GB',
              link: 'Samsung_Galaxy_M10',
         },
         {
              id:5,
              images: '../assets/images/img_5.jpeg',
              product_name: 'Oppo',
              color: 'Black',
              price: '15000',
              size: '64 GB',
              link: 'Samsung_Galaxy_M10',

         },
         {    
              id:6,
              image: '../assets/images/img_9.jpeg',
              product_name: 'Samsung',
              color: 'Gray',
              price: '15000',
              size: '32 GB',
              link: 'Samsung_Galaxy_M10',
         },
         {
              id:7,
              image: '../assets/images/img_7.jpeg',
              product_name: 'Samsung',
              color: 'Black',
              price: '8000',
              size: '32 GB',
              link: 'Samsung_Galaxy_M10',

         },
         {    
              id:8,
              image: '../assets/images/img_8.jpeg',
              product_name: 'Nokia',
              color: 'White',
              price: '3000',
              size: '5 GB',
              link: 'Samsung_Galaxy_M10',
         },    
      ],
      watces: [
         {       
              image: '',
              product_name: '',
         }
      ]   
  	  }
  }  
	// componentDidMount() {
 //    this.props.dispatch(fetchProducts());
 //  }
	
    	render() {
    	  return (
    	    <div>
    	      <h1 className="title">PRODUCTS</h1>
              <div>{this.state.mobiles.map((mobiles_details, index)=>
                <Mobiles key={index} mobile = {mobiles_details}/>)}</div>
          </div>
    	  );
    	}
  
}
class Mobiles extends Component {
  render() {
    return (
     
        <ul className="products">
          <li><Link to={`/products_details/${this.props.mobile.id}`}><img src={this.props.mobile.image} alt="image"/></Link></li>
          <li>Name:{this.props.mobile.product_name}</li>
          <li>Color:{this.props.mobile.color}</li>
          <li>Price:{this.props.mobile.price}</li>
          <li>Size:{this.props.mobile.size}</li>
        </ul> 

    )
  }   
}
class Watches extends Component {
  render() {
    return( 
      <div>
      </div>

    )
  } 

}


// Products.need = [() => { return fetchProducts(); }];

// function mapStateToProps(state) {
//   return {
//      products: getProducts(state),
//   };
// }

// Products.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     product_name: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     size: PropTypes.string.isRequired,
//     status: PropTypes.number.isRequired,
//     quantity: PropTypes.number.isRequired,
//     category_id: PropTypes.string.isRequired,
//     brand_id: PropTypes.string.isRequired,
//    })).isRequired,
//    dispatch: PropTypes.func.isRequired,
// };

// Products.contextTypes = {
//   router: PropTypes.object,
// };

// export default connect(mapStateToProps)(Products);

export default Products;