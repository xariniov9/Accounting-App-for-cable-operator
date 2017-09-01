var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.createConnection('mongodb://kapilsharma:hellomoto@ds153113.mlab.com:53113/kapildb');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.use('/api', require('./api'));

app.listen(3000, function(){
    console.log("Listening on port 3000!")
});

