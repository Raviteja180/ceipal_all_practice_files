const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000,(req,res)=>{
    console.log("it is running");
})
app.post('/users',(req,res)=>{
    console.log("this is from server");
    // console.log(JSON.parse(req));
    // console.log(req.body);
    res.json(req.body);
})