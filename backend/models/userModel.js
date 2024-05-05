const mongoose = require("mongoose");

const user = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pnumber:{type:String, required : true},
    pic: { type: String },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", user);
module.exports = User;
