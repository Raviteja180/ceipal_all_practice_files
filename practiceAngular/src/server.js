const port = 3000;
var express = require('express');
var app = express();
// const path = require('path');

const cors = require('cors');
app.use(cors()) ;
app.use(express.json());

// const bodyparser = require('body-parser');
app.post('/users',(req,res)=>{
    res.json({name:'kishore'})
});
// const api = require('./server/routes/api');

// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());


// app.use('/api',api);

app.listen(port,function(){
    console.log("Server running on localhost:" + port);
});