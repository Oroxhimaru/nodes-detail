const express = require('express');
const app = express();

/* middleware  run before routes*/
app.use((req, res, next) => {
     next(); //not pass through middleware until use of next() then the response will be given
});   //run before any routes which have receive request , plus use(function) always require function in it
    
/* static configuration */
app.use(express.static("./public")); //this public folder should be your root folder means vs code should be open in express-about folder not node details  other wise public folder will not run.

/* ejs configuration */
app.set("view engine", "ejs");


app.get('/', (req, res) => {
     res.render('index');    //res.send('BANKAI'); instead of send render it
})

app.get('/contact', (req, res) => {
     res.render('contact', {move: 'BANKAI'});    //res.send('BANKAI'); instead of send render it
})


/* routes */
app.get('/bankai', (req, res) => {
     res.send('BANKAI');    //res.send('BANKAI'); instead of send render it
})

//dynamic routing with parameter
app.get('/profile/:movesname', (req, res) => {
     res.send(`${req.params.movesname} BANKAI`); 
})

/*error handling */
app.get('/error', (req, res, next) => {
     throw new Error("LAG GAE")
})


app.use(function errorHandler (err, req, res, next) {
     if (res.headersSent) {
       return next(err)
     }
     res.status(500)
     res.render('error', { error: err })
   });

app.listen(3000);