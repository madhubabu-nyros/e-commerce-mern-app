import Delivery_Address from '../models/delivery_address';

// Create Delivery Address Start
export function createDeliveryAddress(req, res){
  console.log('deliveryAddress');
  console.log('req.body',req.body);
  var data = {name:req.body.name, mobile: req.body.mobile, location:req.body.location, state:req.body.state, user_id:req.body.user_id, order_id: req.body.order_id}
  Delivery_Address.create(data, function(err, deliveryAddress){
    if(err) {
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status:200,
        messege: 'Delevery Addrees Entered Successful',
        data: deliveryAddress
      })
    }
  }) 
} // Create Delivery Address End


export function getDeliveryAddress(req, res) {
  console.log('getDeliveryAddress');
  console.log('req.body', req.body);
  Delivery_Address.find({}).populate('order_id').populate('user_id').exec(function(err, deliveryAddress) {
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Get deliveryAddress Successful',
        data: deliveryAddress
      })
    }
  })  
}

