var express = require('express'),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require('method-override'),
morgan = require('morgan')

app.get('/', function(req,res){
  res.render('index.ejs');
})

PORT=3333

app.listen(PORT, function(){
  console.log("server running on ", PORT)
});