const express=require('express');
const router=express.Router();


router.post('/articlesadmin',(req,res,next)=>{
    res.status(200).json({
        message:'Posting Articles'
    })
});
router.put('/articlesadmin/:articleID',(req,res,next)=>{
    const id=req.params.articleID;
    if(id==='trending'){
        res.status(200).json({
            message:'sending trending articles'
        });
    }else if(id==='all'){
        res.status(200).json({
            message:'Sending all articles'
        });
    }
    else{
        res.status(200).json({
            message:'Updating Article'
        });
    }

});
router.delete('/articlesadmin/:articleID',(req,res,next)=>{
    const id=req.params.articleID;
    if(id==='trending'){
        res.status(200).json({
            message:'sending trending articles'
        });
    }else if(id==='all'){
        res.status(200).json({
            message:'Sending all articles'
        });
    }
    else{
        res.status(200).json({
            message:'Deleting Articles'
        });
    }

});
module.exports=router;