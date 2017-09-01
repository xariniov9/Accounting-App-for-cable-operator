var express = require('express');
var restful = require('node-restful');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://kapilsharma:hellomoto@ds153113.mlab.com:53113/kapildb');

var planSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});
module.exports = restful.model('tblplan', planSchema);
