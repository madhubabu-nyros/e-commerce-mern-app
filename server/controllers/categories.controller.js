import Categories from '../models/categories';

export function createCategories(req, res) {
	console.log('createCategories');
	console.log('req.body',req.body);
	var data = {category_name: req.body.category_name, price: req.body.price, stock: req.body.stock};
	Categories.create(data, function(err, category) {
		if(err) {
			res.json({
				status: 400,
				message: 'Something Went Wrong',
				error: err
			})
		}else {
			res.json({
				status: 200,
				messege: 'Category creation Successful',
				data: category
			})
		}
	})
}

export function getCategories(req, res) {
  console.log('getCategories');
  console.log('req.body', req.body);
  Categories.find({}, function(err, category) {
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Get Categories Successful',
        data: category
      })
    }
  })  
}
