var express=require("express");
var bodyparser=require("body-parser");
var multer=require("multer");
var path=require('path');

var owner=require("../model/owner_model");
var login=require("../model/login_model");
var restaurant=require("../model/restaurant_model");
var item=require("../model/item_model");
var reservation=require("../model/reservation_model");

const { callbackify } = require("util"); 
const { pathToFileURL } = require("url");


const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));

// const dir='./uploads';
// const dir=path.join(path.dirname(__dirname),'/public/uploads',req.params.image);

var storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,path.join(path.dirname(__dirname),'/uploads'));
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
});
var upload = multer({ storage: storage }).single('image');

var itemstorage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,path.join(path.dirname(__dirname),'/item'));
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
});

var itemupload = multer({ storage: itemstorage }).single('image');


router.post('/addrest',upload,function(req,res){
    var r1=new restaurant(req.body);
    r1.image=req.file.filename;
    console.log(r1);
    r1.save((err)=>{
        if(err) throw err;
        else{
            res.send({msg:"Restaurant Added"});
        }
    })
})

router.post('/additem',itemupload,function(req,res){
    var i1=new item(req.body);
    i1.image=req.file.filename;
    console.log(i1);
    i1.save((err)=>{
        if(err) throw err;
        else{
            res.send({msg:"Item Added"});
        }
    })
})

router.post('/addowner',function(req,res){
    var o=new owner();
    var status="Pending";
    o.owner_name=req.body.ownername;
    o.owner_phno=req.body.ownerphno;
    o.owner_email=req.body.owneremail;
    o.owner_pswd=req.body.ownerpswd;
    o.owner_licenseno=req.body.ownerlicenseno;
    o.rest_id=null;
    o.owner_status=status;
    o.save((err)=>{
        if(err) throw err;
        else
        res.send({msg:"Registered Succesfully..."})
    })
})

router.post('/newuser',function(req,res){
    var l=new login();
    var profile="new";
    l.username=req.body.username;
    l.pswd=req.body.pswd;
    l.phno=req.body.phno;
    l.email=req.body.email;
    l.city=req.body.city;
    l.role=req.body.role;
    l.profile=profile;
    l.save((err)=>{
        if(err) throw err;
        else
        res.send({msg:"Sign in Succesfull..."})
    })
})
router.get('/displayallrestaurant',function(req,res){
    var r=new restaurant();
    restaurant.find({},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    });
})
router.get('/viewrestaurant',function(req,res){
    var r=new restaurant();
    restaurant.find({status:"Active"},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    });
})
router.post('/getrest',function(req,res){
    var r=new restaurant();
    userid=req.body.userid;
    restaurant.find({ownerid:userid},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    });
})
router.post('/changerestaurantstatus',function(req,res){
    var r=new restaurant();
    restid=req.body.restid;
    if(req.body.caption=='Activate')
        status='Active';
    else
        status='Rejected'
    restaurant.findOneAndUpdate({_id:restid},{status:status},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    });
})
router.post('/viewitem',function(req,res){
    var i1=new item();
    console.log(req.body.restid);
    restid=req.body.restid;
    item.find({restid:restid},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    })
})
router.get('/viewallitem',function(req,res){
    var i1=new item();
    item.find({},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    })
})
router.post('/updateitem',function(req,res){
    var i=new item(req.body.item);
    itemid=req.body.itemid;
    console.log("item"+i);
    console.log(i);
    // { "$set": { "name": name, "genre": genre, "author": author, "similar": similar}}
    // item.findOneAndUpdate({_id:itemid},{itemname=i.itemname},{rate:i.rate},{status:i.status},function(err,result){
        item.findOneAndUpdate({_id:itemid},{"$set":{"itemname":i.itemname,"rate":i.rate,"status":i.status}},function(err,result){
        if(err) throw err;
        else
            res.send(result); 
    });
})


router.post('/userreservationdetails',function(req,res){
    var r=new reservation();
    userid=req.body.userid;
    console.log(userid);
    reservation.find({userid:userid},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    }).sort({date:-1});
})

router.post('/seatdetails',function(req,res){
    var r=new restaurant();
    restid=req.body.restid;
    restaurant.find({_id:restid},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    });
})
router.post('/reservetable',function(req,res){
    var r1=new reservation(req.body.reservation);
    console.log("rrr"+r1);
    r1.save((err)=>{
        if(err) throw err;
        else{
            res.send({msg:"Reserved Table Succesfully "});
        }
    })
})
router.post('/checkavailability',function(req,res){
    var r=new reservation();
    restid=req.body.restid;
    reservation.find({restid:restid},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    });
})
router.post('/verify',function(req,res){
    var r=new reservation();
    id=req.body.reservationid;
    reservation
    
    .findOneAndUpdate({_id:id},{status:'Verified'},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    });
})
router.get("/item/:image", function (req, res) {
    let dir = path.join(path.dirname(__dirname), '/item', req.params.image);
    console.log(dir);

    res.sendFile(dir);
})
router.get("/view/:image", function (req, res) {
    let dir = path.join(path.dirname(__dirname), '/uploads', req.params.image);
    console.log(dir);

    res.sendFile(dir);
})
module.exports=router;