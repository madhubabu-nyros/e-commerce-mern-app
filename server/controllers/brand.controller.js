import Brand from '../models/brands';

// Create Brand Start
export function createBrand(req, res) {
  console.log('createBrand');
  console.log('req.body',req.body);
  var data = {brand_name: req.body.brand_name, status:req.body.status};  
  Brand.create(data, function(err, brand){
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Brand creation Successful',
        data: brand
      })
    }
    
  });
}//Create Brand End




export function getBrand(req, res) {
  console.log('getBrand');
  console.log('req.body', req.body);
  Brand.find({}, function(err, brand) {
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Get Brand Successful',
        data: brand
      })
    }
  })  
}
