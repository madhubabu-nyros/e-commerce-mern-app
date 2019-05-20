import Users from '../models/users';


// Create Users Start
export function createUsers(req, res) {
  console.log('createUsers');
  console.log('req.body',req.body);
  var data = {name: req.body.name, mobile:req.body.mobile, email:req.body.email, password:req.body.password};  
  Users.create(data, function(err, user){
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'User creation Successful',
        data: user
      })
    }
    
  });
}//Create User End


// Get Users Start
export function getUsers(req, res) {
  console.log('getUsers');
  console.log('req.body', req.body);
  Users.find({}, function(err, user) {
    if(err){
      res.json({
        status: 400,
        message: 'Some thing Went Wrong',
        error: err
      })
    }else {
      res.json({
        status: 200,
        message: 'Get Users Successful',
        data: user
      })
    }
  })  
} //Get Users End 


// //Delete Users
// export function deleteUsers(req, res) {
//   Users.findOne({_id:}).exec(err, user) {
//     if(user!==null) {
      
//     }  
//   }
// }






// export function deletePost(req, res) {
//   Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//     if (err) {
//       res.status(500).send(err);
//     }

//     post.remove(() => {
//       res.status(200).end();
//     });
//   });
// }





