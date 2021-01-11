var express=require("express");
var bodyparser=require("body-parser");

var owner=require("../model/owner_model");
var login=require("../model/login_model");

const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));

router.get('/getowner',function(req,res){
    var o=new owner();
    owner.find({owner_status:"Pending"},function(err,result){
        if(err) throw err;
        else
            res.send(result);
    });
})


router.post('/approval',function(req,res){
    status=req.body.status;
    id=req.body.id;
    owner.updateOne({_id:id},{$set:{owner_status:status}},function(err,result){
        if(err) throw err;
        else
            res.send({msg:"Approved ..."})
    })
})
router.post('/newrestuser',function(req,res){

    var id=req.body.id;


    owner.find({_id:id},function(err,result){
        if(err) throw err;
        else{
            var l=new login();
            console.log(result);
            var profile="new";
            l._id=req.body.id;
            l.username=result[0].owner_name;
            l.pswd=result[0].owner_pswd;
            l.phno=result[0].owner_phno;
            l.email=result[0].owner_email;
            l.city="city";
            l.role=req.body.role;
            l.profile=profile;
           // console.log(result[0].owner_name+" dd ");
            l.save((err)=>{
                if(err) throw err;
                else
                res.send({msg:"User added Succesfully..."})
            })
        }
    });

    
})

module.exports=router;