var express = require('express');
var router = express.Router();
var plan = require('./Plan');
var customer = require('./customer');
var bodyParser = require('body-parser');

plan.methods(['get', 'put', 'post', 'delete']);
plan.register(router, '/plan');

customer.methods(['get', 'put', 'post', 'delete']);
customer.register(router, '/customer');

module.exports = router;
