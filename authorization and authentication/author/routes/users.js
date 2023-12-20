const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

//setup mongoose
mongoose.connect("mongodb://127.0.0.1:27017/authorization");

const userSchema = mongoose.Schema({
  username: String,   
  nickname: String,
  secret: String                     
});

userSchema.plugin(plm);

module.exports = mongoose.model("authentication", userSchema);
