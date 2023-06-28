const express=require('express');
const router=express.Router();

router.get('/articles',(req,res,next)=>{
    res.status(200).json({
        message:'Welcome-Please Specify Your requests'
    })
});
router.post('/articles/:articleID',(req,res,next)=>{
    res.status(200).json({
        message:'Updating The Like Counter'
    })
});
router.delete('/articles/:articleID',(req,res,next)=>{
    res.status(200).json({
        message:'Updating The Like Counter'
    })
});

router.get('/articles/:articleID',(req,res,next)=>{
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
            message:'Sending Particular Article'
        });
    }

});
module.exports=router;