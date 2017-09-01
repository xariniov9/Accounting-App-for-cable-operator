var express = require('express');
var restful = require('node-restful');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://kapilsharma:hellomoto@ds153113.mlab.com:53113/kapildb');

var customerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    paymentTill: Number,
    planRegistered: {type : mongoose.Schema.Types.ObjectId, ref: 'tblplan'}
});
module.exports = restful.model('tblcustomer', customerSchema);
