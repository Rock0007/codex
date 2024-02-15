const User = require("../Model/user");
const { ObjectId } = require("mongodb");

//Google
exports.googleCallback = async (req, res) => {
  try {
    const { id } = req.user;
    console.log("Google user data:", req.user);
    const newObjectId = new ObjectId();

    await User.findOneAndUpdate(
      { googleId: id },
      { $set: { _id: newObjectId } },
      { new: true }
    );

    res.redirect("/home");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

//Github
exports.githubCallback = async (req, res) => {
  try {
    const { id } = req.user;
    const newObjectId = new ObjectId();

    await User.findOneAndUpdate(
      { githubId: id },
      { $set: { _id: newObjectId } },
      { new: true }
    );

    res.redirect("/home");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

// sessionController.js
exports.checkSession = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
};

//Logout
exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

//test
exports.test = (req, res) => {
  res.json("test is working");
};

exports.saveUserDetails = async (req, res) => {
  try {
    const userDetails = req.user;
    const existingUser = await User.findOne({ email: userDetails.email });
    if (existingUser) {
      existingUser.lastLogin = new Date();
      await existingUser.save();
      res.json({ message: "User details updated successfully!" });
    } else {
      const newUser = new User({
        username: userDetails.username,
        email: userDetails.email,
      });

      await newUser.save();
      res.json({ message: "New user created successfully!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
