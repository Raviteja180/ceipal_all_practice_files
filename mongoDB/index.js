const express = require('express');
const app= express();
const mg = require('mongoose');
mgurl = "mongodb+srv://Raviteja180:Raviteja@180@cluster0.zuvys7w.mongodb.net/college?retryWrites=true&w=majority"
app.listen(3000,()=>{
    console.log("working");
})
mg.connect(mgurl,()=>console.log("connected to mongoDB"));

// ----------------------

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://Raviteja180:Raviteja@180@cluster0.zuvys7w.mongodb.net/college?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("college");
//   var query = { name  :"raviteja"};
//   dbo.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
