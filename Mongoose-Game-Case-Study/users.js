var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema= new Schema({
	userid:{type:String,index:true,unique:true,trim:true,required:true},
	password:{type:String,default:"1234567"},
	balancechips:{type:Number,default:0.0},
	state:{type:Number,default:2},
	emailid:{type:String,required:true,match: /.+\@.+\..+/,index:true}
},{collection:'users'});
 
//This is static method which can be called ,just by class name.
usersSchema.statics.getId=function(_userid,cb){
	 console.log("userid is ....."+_userid);
	 return UserModel.find({ userid: _userid}, cb);
};
//This is instance method which can be called when instance is created
usersSchema.methods.getUserId=function(_userid,cb){
	console.log("userid..............."+_userid);
	 return UserModel.find({ userid: _userid}, cb);
};

UserModel = mongoose.model('Users',usersSchema);

module.exports={UserModel}; 