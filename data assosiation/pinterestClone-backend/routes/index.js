var express = require('express');
var router = express.Router();
const userModel = require("./users"); //import both data files 3.
const postModel = require("./posts");  //import both data files 3.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// (10)
router.get('/alluserposts', async function(req, res, next) {
  let user = await userModel.findOne({_id: "65845e5e2b5e250786f07013"})  //run this route you will find id of post but not the data
  .populate("posts"); //open the data of posts array (11) run the route again.
  res.send(user);
});  


//creating default user 4.
router.get('/createuser', async function(req, res, next) { //this is a async func therfore using async await keyywords.
  let createduser = await userModel.create({
    username: "hassan",
    password: "hassan",
    posts: [],
    email: "hassan@male.com",
    fullname: "M HASSAN MALIK",
  });
  res.send(createduser); //check it one time , if you checkit second  time it  will show error because of unique name.
});
router.get('/createpost', async function(req, res, next) { //this is a async func therfore using async await keyywords.
  let createdpost = await postModel.create({
    postText: "Hello evernyan hi how are you fine shanksyou", //change the data (9)
    user: "65845e5e2b5e250786f07013" //paste user id here (7). do further work below
  });
  //here
   let user = await userModel.findOne({_id: "65845e5e2b5e250786f07013"}); //find the this id which we paste in userModel and sttore in user var
   user.posts.push(createdpost._id); //push the id of createdpost id in posts array of user
   await user.save(); //have to save this  by wriiten save func
  res.send("done"); //run this route  in browser then check the data in mongodb both will have each other id.
});


module.exports = router;
