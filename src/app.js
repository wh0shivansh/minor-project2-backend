const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const path = require('path');
const dotenv = require("dotenv");
const dbConnect = require("./config/db/dbConnect");
const cookieSession = require("cookie-session");

//ROUTES
const studentRoutes = require('./route/StudentRoute');


//dotenv
dotenv.config();
const app = express();

// dbConnect
dbConnect();

app.use(express.json());

//Users cookies
app.use(
    cookieSession({
        name:"session",
        keys:["argham"],
        maxAge: 24*60*60*100,
    })
)

//cors
app.use(
	cors({
        origin:['http://localhost:3000','http://127.0.0.1:5501'],
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use(bodyParse());
app.use(bodyParse.json({limit: '50mb', type: 'application/json'}));


app.use("/api", studentRoutes);

module.exports = app;
