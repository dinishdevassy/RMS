var mongoose=require("mongoose");
var schema=mongoose.Schema; //instance created.

var reservationschema=new schema({
    
    date:{type:String,required:true},
    time:{type:String,required:true},
    restid:{type:String,required:false},
    userid:{type:String,required:true},
    otp:{type:String,required:true},
    // opentime:{type:String,required:true},
    // closetime:{type:String,required:true},
    // image:{type:String,required:true},
    // ownerid:{type:String,required:true},
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

var reservation_model=mongoose.model("reservation",reservationschema,"reservation");
module.exports=reservation_model;