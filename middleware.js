const express = require('express');
const app = express()

/* 14 */
app.use(function(req, res, next) {
    console.log('uchiha itachi');
    next(); //next is necessary for pushing our code not to stuck on middleware
});

app.use(function(req, res, next) {
    console.log('uchiha madara');
    next(); //next is necessary for pushing our code not to stuuk on middleware
});

app.get('/', function(req, res) {
    res.send('M Hassan Malik')  //res.send mean response is sending to route which is / slash but for running you need to listen the code
})



app.listen(3000);