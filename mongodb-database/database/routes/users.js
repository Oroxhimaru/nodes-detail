//mongoose code , storing mongoose in var 
const mongoose = require("mongoose");

//mongoose setup connection
mongoose.connect("mongodb://127.0.0.1:27017/practice");  //127.0.0.1 this is local host.
//mongoose will connect backend with mongodb 27017 is port number then write any name of database

//schema code
const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})


//model code
//mongoose.model("name any collection", schema);
module.exports = mongoose.model("user", userschema);

/*practice is container which is database contain whole data, then schema contain documents and
 moddel made different kind  of data like here  is "user". so now user will contain all schema documents */ 
