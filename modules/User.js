const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required:true},
    ava: {type: String, default:"https://i.imgur.com/iwztNLm.png"},
    date: {type:Date, default: Date.now}
});
module.exports = User = mongoose.model("User", userSchema);