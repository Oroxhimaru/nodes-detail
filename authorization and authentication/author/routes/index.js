var express = require('express');
var router = express.Router();
const passport = require('passport'); //...
const userModel = require("./users");

const localStrategy = require("passport-local"); //...
passport.use(new localStrategy(userModel.authenticate()));



//register route
router.post('/register', (req,res) => {
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userData, req.body.password)
  .then(function (registereduser) {
    passport.authenticate("local")(req,res,function (){
      res.redirect('/profile');
    })
  });

});


router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post("/login", passport.authenticate("local", {
  successRedirect: '/profile',
  failureRedirect: '/'
}), function (req,res){ 
});  //passport.authenticate() is working as a middleware here between route and function

router.get('/logout', (req,res,next) => {
   req.logout(function(err){
    if (err) { return next(err); }
      res.redirect('/');
   });
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){   //if we are logged in then it will go ahead.
    return next();
  }
  res.redirect('/');  //otherwise go to homepage
}
module.exports = router;
