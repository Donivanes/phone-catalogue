require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const whitelist = ["http://localhost:3000", "http://localhost:1234"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// Middleware Setup
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/static", express.static(__dirname + "/public"));

// Routes
const index = require("./routes/index");
app.use("/", index);

module.exports = app;
