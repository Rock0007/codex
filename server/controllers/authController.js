const mongoose = require("mongoose");
const User = require("../models/user");
const { comparepassword, hashpassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

//test
const test = async (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({
        error:
          "All fields (username, email, password, confirmPassword) are required.",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error:
          "Invalid email address. Please provide a Gmail address ending with @gmail.com.",
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        error: "Password should be at least 6 characters long.",
      });
    }

    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Password and confirm password do not match.",
      });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({
        error: "Username or email already exists.",
      });
    }

    const hashedPassword = await hashpassword(password);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const isEmail = /^[^\s@]+@gmail\.com$/.test(identifier);

    let user;
    if (isEmail) {
      user = await User.findOne({ email: identifier });
    } else {
      user = await User.findOne({ username: identifier });
    }

    if (!user) {
      return res.status(401).json({
        error: "Invalid credentials.",
      });
    }
    const isPasswordMatch = await comparepassword(password, user.password);

    if (isPasswordMatch) {
      const token = jwt.sign(
        { email: user.email, id: user._id, username: user.username },
        process.env.JWT_SECRET
      );
      res.cookie("token", token, { httpOnly: true }).json(user);
    } else {
      return res.status(401).json({
        error: "Invalid credentials.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
};

const users = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);

    //MongoDB errors
    if (error.name === "MongoError") {
      return res.status(500).json({ error: "MongoDB error" });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

// const getProfile = async (req, res) => {
//   try {
//     const { token } = req.cookies;

//     if (!token) {
//       return res.status(401).json({
//         error: "Unauthorized. Token not provided.",
//       });
//     }

//     // Added logging to identify the issue
//     console.log("Token received:", token);

//     const user = jwt.verify(token, process.env.JWT_SECRET);

//     console.log("Decoded user:", user);

//     if (!user) {
//       return res.status(401).json({
//         error: "Unauthorized. Invalid token.",
//       });
//     }

//     const userDetails = await User.findById(user.id);

//     if (!userDetails) {
//       return res.status(404).json({
//         error: "User not found.",
//       });
//     }

//     res.json(userDetails);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       error: "Internal server error. Please try again later.",
//     });
//   }
// };

const logout = async (req, res) => {
  try {
    res.clearCookie("token").json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error during logout" });
  }
};

const getProfileByID = async (req, res) => {
  const userId = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);

    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ error: "Invalid user ID format" });
    } else if (error.name === "MongoError") {
      return res.status(500).json({ error: "MongoDB error" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

//getProfile by Username
const getProfileByUsername = async (req, res) => {
  const username = req.params.username;

  try {
    if (!username || typeof username !== "string") {
      return res.status(400).json({ error: "Invalid username" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);

    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid username format" });
    } else if (error.name === "MongoError") {
      return res.status(500).json({ error: "MongoDB error" });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  users,
  logout,
  getProfileByID,
  getProfileByUsername,
};
