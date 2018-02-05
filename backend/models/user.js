var mongoose = require('mongoose');


var user_schema=mongoose.Schema;
var userSchema=new user_schema({
name:String,
id :{type: String, unique: true},
password: String,
role:String,
created_at: { type: Date, default: Date.now() },
updated_at: { type: Date}
});

var User = mongoose.model('user',userSchema);

    module.exports=User;


