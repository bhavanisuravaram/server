const express=require('express')
const router=express.Router();

router.get(`/login`,(req,res,next)=>{
    res.end(`<h1>login here  here</h1>`)

})
module.exports=router;
