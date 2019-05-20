import Cart from '../models/cart';

// Create Cart Details Start
export function createCart(req, res) {
	// console.log('createCart');
	// console.log('req.body',req.body.p_id);
	var data = {product_id: req.body.p_id};
	
	Cart.find({product_id: req.body.p_id}).exec(function(err, product) {
		if(product.length == 0)
		{
			Cart.create(data, function(err, cart) {
				if(err) {
					res.json({
						status: 400,
						message: 'Something Went Wrong',
						error: err
					})
				}else {
					res.json({
						status: 200,
						message: 'Cart Creation Successful',
						data: cart
					})
				}
			})
		}
	})	
}// Create Cart Details End

export function getCart(req, res) {
  
  Cart.find({}).populate('product_id').exec(function(err, cart) {
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Get Cart Successful',
        data: cart
      })
    }
  })  
}

export function deleteCart(req, res) {
	console.log('deleteCart');
	console.log('req.body',req.body)
	console.log('req.body.c_id', req.body.c_id);
	var data = {_id: req.body.c_id};
	Cart.findOne(data).exec(function(err, cart) {
		if(cart.length!=0) {
			Cart.remove(cart).exec(function(err, cart) {
				if(err) {
					res.json({
						status:400,
						message: 'Something Went Wrong',
						error: err
					});
				}else {
					res.json({
						status:200,
						message: 'Delete Product Successful',
						data: cart
					});
				}
			})
		}
	})

}