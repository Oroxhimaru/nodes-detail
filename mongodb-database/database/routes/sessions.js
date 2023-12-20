var express = require('express');
var router = express.Router();

//creating sessions
router.get("/session", (req,res) => {
    req.session.anyname = true; //this session data will save on the server for the specific pc's browser, when we gonna visit /session route
    res.render('session'); //session here is ejs file
});


router.get("/checksession", (req,res) => {
    console.log(req.session); //we  can access session which we created in anywhere 
    res.send('check it');
});

router.get("/removesession", function (req,res) {
    req.session.destroy(function(err){
        if(err) throw err;
        res.send("anytime value remoove");
    });
});

module.exports = router;


//for new jjs you need to import it in main file app.js,like in this case i have add this, app.use('/', sessionRouter); const sessionRouter = require('./routes/sessions');

