var express = require('express');
var router = express.Router();
//importing model from user
const userModel = require("./users");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('age', 24); //(name, value)we have send the data to browser, now for reading this cookie go down in cookie section 
  res.render('index', { title: 'Express' });
});

//creation of data
router.get("/create", async function(req,res) {
const userCreate = await userModel.create({     //this async function thats why we are using await keyword here socreation wait for first creating
    username: "M HASSAN MALIK",
    age: 24,
    name: "M HASSAN MALIK"
  }); //always go object here which you put in schema
  res.send(userCreate);
});

//finding of data whicch is known as reading 
/*
router.get("/allusers", async function (req,res) {
  let allusers = await userModel.find();
  res.send(allusers);
});  */

router.get("/allusers", async function (req,res) {  //findOne use to call only one specific data
  let allusers = await userModel.findOne({username: "M HASSAN MALIK"});
  res.send(allusers);
}); 


//for deleting the data
/*
router.get("/delete", async function (req,res) {
  let deleteUser = await userModel.findOneAndDelete({
    username: "M HASSAN MALIK"
  });
  res.send(deleteUser);
});
*/  


//cookies code here go to the comment above /* GET home page. */
//read of cookies
router.get('/readCookies', function(req, res, next) {
  console.log(req.cookies); //we write req here coz data is coming from browser
  console.log(req.cookies.age);
  res.send("cookies here");
});

router.get('/deleteCookies', (req,res) => {
  res.clearCookie('age'); //writing response coz we deleteing the data of browser
  res.send('delete cookie');
});




module.exports = router;
