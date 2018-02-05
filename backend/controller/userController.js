var User =require('../models/user');

exports.postUserDetails=(request,response)=>{
    var user=new User({
        name:  request.body.name,
        id:request.body.id,
        password:request.body.password,
        role:request.body.role,
        created_at:new Date(),
        updated_at:request.body.updated_at
    });

    user.save((error,res)=>{
        if(error)
        return error;
        else
        {
            response.json({
                success:true,
                body:res
            })
        }
    })
}

exports.getAllUser=(req,res)=>{
    User.find({role:'user'},(error,response)=>{
        if(error)
            res.json(error);
        res.json(response);
    });
}


exports.updateUserDetail=(req,res)=>{
    console.log('inside update');
    var query={
        "$set":  {name:req.body.name,
        password:req.body.password,
        date:req.body.date,
     } };
    console.log(req.params.id);
   User.findOneAndUpdate({id:req.params.id},query,(error,response)=>{
       console.log(response);
       if(error)
           res.json({
               success: false,
               message: error
           });
       res.json({
        success: true,
        message: 'updated successful!!!',
        data: response
       });
   }); 
}


exports.userAuthentication=(req,res)=>{
    User.findOne({
        id: req.body.id
      }, function(err, user) {
    
        if (err) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        }
    
        else if (user) {
    
          // check if password matches
          if (user.password !== req.body.password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {

            res.json({
              success: true,
              data :user,
            });
          }
    
        }
    
      });
}

exports.getUserDetails=(req,res)=>{
    var user_id=req.params.id;
    User.findOne({"id":user_id},(error,response)=>{
        if(error)
            res.json({
                success:false,
                message:error
            });
        res.json({
            success:true,
            data:response
        });
    });
}