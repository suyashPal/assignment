var express=require('express');

var router=express.Router();


var usercontroller=require('../controller/usercontroller');

router.route('/v1/user/createUser').post(usercontroller.postUserDetails);
router.route('/v1/user/authenticateUser').post(usercontroller.userAuthentication);
router.route('/v1/user/getAllUser').get(usercontroller.getAllUser);
router.route('/v1/getuserdetails/:id').get(usercontroller.getUserDetails);
router.route('/v1/updateuserdetails/:id').put(usercontroller.updateUserDetail);



module.exports=router;