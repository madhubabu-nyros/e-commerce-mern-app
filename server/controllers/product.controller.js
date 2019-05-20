import Products from '../models/products';

export function createProducts(req, res) {
	console.log('createProducts');
  	console.log('req.body',req.body);
	var data = {image: req.body.image,product_name: req.body.product_name, color:req.body.color, price:req.body.price, discription1:req.body.discription1, discription2:req.body.discription2, discription3:req.body.discription3, discription4:req.body.discription4, discription5:req.body.discription5, discription6:req.body.discription6, discription7:req.body.discription7, name:req.body.name, size: req.body.size};
	Products.create(data, function(err, product) {
		if(err) {
			res.json({
				status: 400,
				message: 'Someting Went Wrong',
				error: err
			})
		}else {
			res.json({
				status:200,
				message: 'Product Creation Successful',
				data: product
			})
		}
	})
}

export function getProducts(req, res) {
  Products.find({}).exec(function(err, product) {
  	if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Get Products Successful',
        data: product
      })
    }
  })  
}
