import Orders from '../models/orders';


// Create Orders Start
export function createOrders(req, res) {
  console.log('createOrders');
  console.log('req.body',req.body);
  var data = {price: req.body.price, product_id:req.body.product_id, user_id:req.body.user_id, quantity:req.body.quantity};  
  Orders.create(data, function(err, order){
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Order creation Successful',
        data: order
      })
    }
    
  });
}//Create Orders End

export function getOrders(req, res) {
  console.log('getOrders');
  console.log('req.body', req.body);
  Orders.find({}).populate('product_id').populate('user_id').exec(function(err, order) {
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Get Orders Successful',
        data: order
      })
    }
  })  
}
