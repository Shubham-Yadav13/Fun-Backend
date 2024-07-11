
const express = require("express");
const app = express();
require('dotenv').config(); 
console.log('hiii hellow world')
const port = process.env.PORT || 4000;
//console.log(process.env,'-------------') // remove this after you've confirmed it is working

app.get('/',(req,res)=>{
res.send('Home Page')
})
app.get('/hi',(req,res)=>{
   res.send('hishubh')
})
app.listen(port, ()=>{
    console.log(`port number ${process.env.port}`)
});