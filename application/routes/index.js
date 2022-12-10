var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts} = require('../middleware/posts')
var router = express.Router();


/* GET home page. */
router.get('/', getRecentPosts, function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Jaime Guardado" });
});

router.get("/index",function(req, res){
  res.render('index', {css:["../css/style.css"]});
});

router.get("/login",function(req, res){
  res.render('login', {css:["../css/style.css"]});
});

router.get("/postimage", isLoggedIn ,function(req, res){
  res.render('postimage', {css:["../css/style.css"]});
});

router.get("/registration",function(req, res){
  res.render('registration', {css:["../css/style.css"]});
});

router.get("/js/validation.js",function(req, res){
  res.render('validation', {css:["../css/style.css"]});
});
router.get("/viewpost",function(req, res){
  console.log(req.params);
  res.render('viewpost');
});

module.exports = router;

