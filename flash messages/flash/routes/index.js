var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

//flash code work
router.get('/failed', (req,res) => {
    //req.flash(naam,data)
    req.flash("age", 24 );
    res.send("send the flash")
});
//using flash in another route
router.get('/checkFailed', (req,res) => {
  console.log(req.flash("age"));
});


module.exports = router;
