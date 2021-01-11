var express=require("express");
const path=require("path");
var bodyparser=require("body-parser");

var mongoose=require("mongoose");
var url="mongodb+srv://dinish:dinish@cluster0-llco8.mongodb.net/Restaurant?retryWrites=true&w=majority";
// var url="mongodb://localhost/sdb"

var adminrouter=require("./Routes/adminrouter")
var restrouter=require("./Routes/restrouter")
var userrouter=require("./Routes/userrouter")
const app=express();

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());
app.use("/admin",adminrouter);
app.use("/rest",restrouter);
app.use("/user",userrouter);

const port=process.env.port||8080;
app.listen(port,function(req,res){
    console.log("*** Server Started Listening ***");
    console.log("*** in http://localhost:"+port+" *** ");

})

mongoose.connect(url,function(err){
    if(err)
        throw err;
    else
        console.log("Db Connected");
})
