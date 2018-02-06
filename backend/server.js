var express=require('express');
var mongoose=require('mongoose');
var body_parser=require('body-parser');



mongoose.connect('mongodb://localhost:27017/userlist');


var main=module.exports=express();

main.set('env',process.env.NODE_ENV || 'production');

main.use(body_parser.urlencoded({ extended : true}));

main.use(body_parser.json());


routes=require('./routes/routes');
main.use('/api',routes);


var port = process.env.PORT || 1000;



main.listen(port);
console.log('Server starts on port ' + port);