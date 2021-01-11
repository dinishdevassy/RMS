var mongoose=require("mongoose");
var schema=mongoose.Schema; //instance created.

var restaurantschema=new schema({
    
    name:{type:String,required:true},
    phno:{type:String,required:true},
    email:{type:String,required:false},
    city:{type:String,required:true},
    star:{type:String,required:true},
    opentime:{type:String,required:true},
    closetime:{type:String,required:true},
    image:{type:String,required:true},
    ownerid:{type:String,required:true},
    //tablecount:{type:Number,required:true},
    tablelist:{
        seat_1:{ type:Number,required:true},
        seat_2:{ type:Number,required:true},
        seat_4:{ type:Number,required:true},
        seat_6:{ type:Number,required:true},
        seat_8:{ type:Number,required:true},
        seat_10:{ type:Number,required:true},
    },
    status:{type:String,required:true}
})

var restaurant_model=mongoose.model("restaurant",restaurantschema,"restaurant");
module.exports=restaurant_model;