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
const path = require("path");



// route for signing users in --------------->

app.post("/signup", async (req, res) => {
  let success = false;
  let userExists = false;
  try {
    let user;
    user = await User.findOne({ email: req.body.email });
    
    // checking if user already exists or not ? -------------------->
    if (user) {
      userExists = true;
      return res.status(500).json({ userExists });
    }

    // if user does not exists then
    //  Hash the password
    // create new user model
    // save to database
    // create auth token and
    // send the response -------------------------->

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



// route for logging users in -------------------->
app.post("/login", async (req, res) => {
  let success = false;
  let userExists = false;
  try {
    const { email } = req.body;

    // check for if user exists or not ----------->
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({ success, userExists });
    }

    // if user does not exists then
    // match the password
    // create auth token and
    // send the response -------------------------->

    const checkPass = await bcrypt.compare(req.body.password, user.password);
    if (!checkPass) {
      return res.status(400).json({ success, error: "Incorrect password" });
    }

    const token = jwt.sign(user.id, secret);
    success = true;
    userExists = true;
    return res.status(201).json({ success, userExists, token: token, user });
  } catch (error) {
    console.log(error)
   return res.status(500).json({ success, userExists });
  }
});



// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// // --------------------------deployment------------------------------





app.listen( process.env.PORT, () => {
    console.log(`app has started at ${process.env.PORT}`);
})

