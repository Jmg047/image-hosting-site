var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostsById} = require('../middleware/posts')
var router = express.Router();


/* GET home page. */
router.get('/', getRecentPosts, function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Jaime Guardado" });
});

router.get("/index",function(req, res){
  res.render('index', {css:["style.css"]});   
});

router.get("/login",function(req, res){
  res.render('login', {css:["style.css"]});
});

router.get("/postimage", isLoggedIn ,function(req, res){
  res.render('postimage', {css:["style.css"]});
});
router.get("/posts/:id(\\d+)", getPostsById, function(req, res){
  console.log(req.params);
  res.render('viewpost',{js:["viewpost.js"]});            
});   

router.get("/search", function(req, res, next){
  console.log(req.query);
  req.query['search-text']
});

router.get("/registration",function(req, res){
  res.render('registration', {css:["style.css"]});
});

router.get("/js/validation.js",function(req, res){
  res.render('validation', {css:["style.css"]});
});
router.get("/viewpost",function(req, res){
  console.log(req.params);
  res.render('viewpost',{js:["viewpost.js"]});
});

module.exports = router;

