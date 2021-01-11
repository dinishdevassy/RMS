var mongoose=require("mongoose");
var schema=mongoose.Schema; //instance created.

var loginschema=new schema({
    
    username:{type:String,required:true},
    phno:{type:String,required:true},
    email:{type:String,required:false},
    city:{type:String,required:true},
    pswd:{type:String,required:true},
    role:{type:String,required:true},
    profile:{type:String,required:true}
})

var login_model=mongoose.model("login",loginschema,"login");
module.exports=login_model;