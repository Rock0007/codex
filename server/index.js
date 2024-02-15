const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session"); // Change this line
const passport = require("./Middlewares/passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./Model/user");
const db = require("./db");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);
app.use(express.json());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Additional middleware to handle CORS headers for redirect response
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// Routes
app.use("/", require("./Routes/index"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
