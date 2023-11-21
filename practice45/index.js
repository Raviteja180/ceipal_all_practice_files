const express = require('express');
const cors = require('cors');
const app = express();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.listen(4000,(req,res)=>{
  console.log("yeah server started running");
})
app.post('/users',(req,res)=>{
  console.log("--",req.body);
  res.send(req.body);
})
app.get('/raviteja',(req,res)=>{
  res.json({"ratnakar":3456});
})