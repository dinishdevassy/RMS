var mongoose=require("mongoose");
var schema=mongoose.Schema; //instance created.

var itemschema=new schema({
    
    itemname:{type:String,required:true},
    restid:{type:String,required:true},
    rate:{type:Number,required:false},
    image:{type:String,required:true},
    status:{type:String,required:true}
})

var item_model=mongoose.model("item",itemschema,"item");
module.exports=item_model;