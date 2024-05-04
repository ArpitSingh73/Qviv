const mongoose = require("mongoose");

const user = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic: { type: String, required: true },
});

export default User = mongoose.model("User", user);
