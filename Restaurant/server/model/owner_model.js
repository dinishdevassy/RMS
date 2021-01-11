var mongoose=require("mongoose");
var schema=mongoose.Schema; //instance created.

var ownerschema=new schema({
    
    owner_name:{type:String,required:true},
    owner_phno:{type:String,required:true},
    owner_email:{type:String,required:false},
    owner_licenseno:{type:String,required:true},
    owner_pswd:{type:String,required:true},
    rest_id:{type:String,required:false},
    owner_status:{type:String,required:true}
})

var owner_model=mongoose.model("owner",ownerschema,"owner");
module.exports=owner_model;