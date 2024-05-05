const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const app = express();
const User = require("./models/userModel")
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

const connectToDb = require("./db")
connectToDb() 
app.use(cors())
const secret = process.env.SECRET



app.post("/signup", async (req, res) => {
  let success = false;
  let userExists = false;
  try {
    let user;
 
       user = await User.findOne({ email: req.body.email });
 
    if (user) {
      userExists = true;
      return res.status(500).json({ userExists });
    }

 
     const salt = await bcrypt.genSalt(10);
     const password = await bcrypt.hash(req.body.password, salt);
  
  
     user = await User.create({
       name: req.body.name,
       email: req.body.email,
       password: password,
       pnumber:req.body.pnumber,
       pic: req.body.result,
     });
  
  
  const token = jwt.sign(user.id, secret);
  success = true;
   return res.status(201).json({ success, token: token,  user });
  } catch (error) {
   return res.status(500).json({ success, userExists });
  }
});




app.post("/login", async (req, res) => {
  let success = false;
  let userExists = false;
  try {
    const { email } = req.body;
    console.log("1")
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({ success, userExists });
    }

    const checkPass = await bcrypt.compare(req.body.password, user.password);
    if (!checkPass) {
      return res.status(400).json({ success, error: "Incorrect password" });
    }

    const token = jwt.sign(user.id, secret);
    success = true;
    userExists = true;
    return res
      .status(201)
      .json({ success, userExists, token: token, user });
  } catch (error) {
    console.log(error)
   return res.status(500).json({ success, userExists });
  }
});



app.listen( process.env.PORT, () => {
    console.log(`app has started at ${process.env.PORT}`);
})

