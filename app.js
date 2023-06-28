const express=require('express');
const app=express();
const mongoose=require('mongoose');
const articleRoutes=require('./api/routes/articles');
const articleRoutesAdmin=require('./api/routes/articlesadmin');


app.use(('/articles',articleRoutes));
app.use(('/articlesadmin',articleRoutesAdmin));
/*app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')//Star for allowing all clients
    res.header(
        'Access-Control-Allow-Origin',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
    );
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET')
        return res.status(200).json({})
    }
    next();
});*/
module.exports=app;