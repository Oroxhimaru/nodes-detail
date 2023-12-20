/* 12 */
// npm i express   - install in your project
//importing express 
const express = require('express');
// given express code to app variable
const app = express()

/* app.get(route, function) these two thing are required in express code */

app.get('/', function(req, res) {
    res.send('M Hassan Malik')  //res.send mean response is sending to route which is / slash but for running you need to listen the code
})

app.get('/profile', function(req, res) {
    res.send('GAME OVER') 
})


app.listen(3000);

// this above code is called server . for running the server go to terminal run the file then go to browser and write http://localhost:3000/