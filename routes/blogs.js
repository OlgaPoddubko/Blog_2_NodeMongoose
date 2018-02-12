var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = require('../models/Blog.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
  Blog.find(function (err, blogs) {
    if (err) return next(err);
  //  res.json(blogs);
   // res.send(blogs);
     res.render('index', { title: 'Hey', message: blogs })
    console.log("get blogs:" + blogs);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Blog.findById(req.params.id, function (err, blog) {
    if (err) return next(err);
   // res.json(blog);
    res.send(blog);
    console.log("get blog" + req.params.id +":" + blog);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
  Blog.create(req.body, function (err, blog) {
    if (err) return next(err);
    //res.json(blog);
    res.send(blog);
    console.log("post blog:" + blog);
  });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  Blog.findByIdAndUpdate(req.params.id, req.body, function (err, blog) {
    if (err) return next(err);
    //res.json(blog);
    res.send(blog);
    console.log("put blog" + req.params.id + ":" + blog);
  });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  Blog.findByIdAndRemove(req.params.id, req.body, function (err, blog) {
    if (err) return next(err);
    //res.json(blog);
    res.send(blog);
    console.log("deleted blog" + req.params.id + ":" + blog);
  });
});

module.exports = router;