var express = require('express');
var router = express.Router();


const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/create', async function(req,res) {
  let userData = await userModel.create({
    username: "kusangi",   //first question
  nickname: "KYO",
  description: "KYOSANGI",   
  categories: ['IORI', "KYO 2", "OROCHI", "LEONA"],
  });
  res.send(userData);
});



router.get('/find0', async (req,res) => {
  let user = await userModel.find(); 
  res.send(user);
 }); 

//how i can perform  a case-insensitive search in Mongoose?

router.get('/find', async (req,res) => {
  //new RegExp(search, flags)
  var regex = new RegExp("malik", "i");   //i  means insensitive, malik is the word which we are finding.
 let user = await userModel.find({username: regex}); //var here
 res.send(user);
}); //but in this case you will get every result contain malik


router.get('/find1', async (req,res) => {
  var regex = new RegExp("^malik$", "i");   // ^$ with this you will get exactly the result malik
 let user = await userModel.find({username: regex});
 res.send(user);
}); 


//how do i find documents where an array field contains all of a set of values


router.get('/find2', async (req,res) => {
  let user = await userModel.find({ categories: {$all: ["IORI"]}}); //$all means search in all 
  res.send(user);
 }); 
 
 //how can i  search for documents with a specific date range in Mongoose
 router.get('/find3', async (req,res) => {
  var date1 = new Date("2023-12-17");
  var date2 = new Date("2023-12-19");
  let user = await userModel.find({ datecreated: {$gte: date1, $lte: date2}}); //$gte greater than equal and lte less than equal 
  res.send(user);
 }); 

//filter documents based on the existence of a  field 
router.get('/find4', async (req,res) => {
  let user = await userModel.find({ categories: { $exists: true }}); //means existence 
  res.send(user);
 }); 


 //filter documents based on the field's length

 router.get('/find5', async (req,res) => {
  let user = await userModel.find({
    $expr:{
      $and:[
        {$gte: [{$strLenCP: "$nickname"}, 0]},
        {$lte: [{$strLenCP: "$nickname"},12]}
      ]
    }
  }); //means expression 
  res.send(user);
 }); 



module.exports = router;



