const mongoose = require("mongoose");

//setup mongoose
mongoose.connect("mongodb://127.0.0.1:27017/testing");

const userSchema = mongoose.Schema({
  username: String,   //first question
  nickname: String,
  description: String,   
  categories: {        //second question
    type: Array,
    default: []
  },  
  datecreated: {
    type: Date,            //third question
    default: Date.now()
  }                     
});


module.exports = mongoose.model("user", userSchema);
