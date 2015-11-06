var express = require('express');
app = express();
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var morgan = require('morgan');
var seeder = require('mongoose-seed');
var apiRouter = express.Router();
var db = require("./models");

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});


apiRouter.route('/teas')
.get(function(req,res){
  db.Tea.find({},function(error,response){
    res.json(response);
  })
})

app.use('/', apiRouter);


app.get('/', function(req,res){
  res.render('index.ejs');
})

PORT=3333

app.listen(PORT, function(){
  console.log("server running on ", PORT)
});