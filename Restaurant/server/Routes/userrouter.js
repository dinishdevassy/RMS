var express=require("express");
var bodyparser=require("body-parser");
var multer=require("multer");
var path=require('path');

var owner=require("../model/owner_model");
var login=require("../model/login_model");
var restaurant=require("../model/restaurant_model");
const { callbackify } = require("util");
const { pathToFileURL } = require("url");


const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));



router.post('/login',function(req,res){
    var l=new login();
    // console.log("hi");
    console.log(req.body);
    uname=req.body.username;
    pwd=req.body.password;
    login.find({username:uname,pswd:pwd},function(err,result){
        if(err) throw err;
        else
            res.send(result);
            console.log(result);
    });
})

router.get('/userdetails',function(req,res){
    var u=new login();
    // console.log("hi");
    login.find({},function(err,result){
        if(err) throw err;
        else
            res.send(result);
            // console.log(result);
    });
})

module.exports=router;