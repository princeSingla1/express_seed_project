var express = require('express');
var mysql = require('mysql');
var Sequelize = require('sequelize');
var http      = require('http');
var restful = require('sequelize-restful');
var sequelize = new Sequelize('test_database', 'root','');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');


// Create the application.
var app = express();


// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


// CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



app.use(restful(sequelize, { endpoint: '/restful', allowed: new Array() }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.get('/test', function (req, res) {
    res.render('test');
});



// Load the models.
 models = require('./models/index');


var routes = require('./Routes');


app.post('/test_route',routes.user);


  app.set('port', process.env.PORT || 3000); 
 models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
}); 
