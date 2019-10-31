var mongoose = require('mongoose');
var con;
var conflag=false;
var init=function initdb(){
	mongoose.connect("mongodb://127.0.0.1:27017/GameDesign",callback);
}
var callback = function(err,data){
	if(err)
		console.log(err);
	else{
		console.log("connection success");
		conflag=true;
		con = mongoose.connection;
	}	
}	
module.exports={con,init,conflag};