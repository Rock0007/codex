const router = require("express").Router();
const cors = require("cors");
const dotenv = require("dotenv").config();
const {
  test,
  registerUser,
  loginUser,
  users,
  logout,
  getProfileByID,
  getProfileByUsername,
} = require("../controllers/authController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

//test
router.get("/", test);

//POST Register
router.post("/register", registerUser);

//Post Login
router.post("/login", loginUser);

//Get Profile
router.get("/profile", users);

//Get Profile by ID
router.get("/profile/:id", getProfileByID);

//Get Profile by Username
router.get("/profile/user/:username", getProfileByUsername);

//Logout
router.delete("/logout", logout);

module.exports = router;
