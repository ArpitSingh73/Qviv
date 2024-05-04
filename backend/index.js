const express = require('express');
const dotenv = require('dotenv');
dotenv.config
const cors = require('cors');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(cors())
app.get("/", (req, res) => {
    res.send("<h1>qamp</h1>");
})

app.listen(5000, () => {
    console.log("app has started")
})