const express = require('express');

const app = express();


app.use(express.json());//json parsing
app.get('/test',(req,res)=>{
    res.status(200).send({status:200,message:"Successful"})
});

module.exports = app;