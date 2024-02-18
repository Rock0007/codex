const router = require("express").Router();
const cors = require("cors");
const dotenv = require("dotenv").config();
const {
  test,
  registerUser,
  loginUser,
  getProfile,
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

router.get("/", test);

//POST Register
router.post("/register", registerUser);

//Post Login
router.post("/login", loginUser);

//Get Profile
router.get("/profile", getProfile);

//Get Profile by ID
router.get("/profile/:id", getProfileByID);

//Get Profile by Username
router.get("/profile/:username", getProfileByUsername);

//Logout
router.delete("/logout", logout);

module.exports = router;
