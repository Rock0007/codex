const User = require("../Model/user");
const { ObjectId } = require("mongodb");

exports.googleCallback = async (req, res) => {
  try {
    const { id } = req.user;
    const newObjectId = new ObjectId();

    await User.findOneAndUpdate(
      { googleId: id },
      { $set: { _id: newObjectId } },
      { new: true }
    );

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

exports.githubCallback = async (req, res) => {
  try {
    const { id } = req.user;
    const newObjectId = new ObjectId();

    await User.findOneAndUpdate(
      { githubId: id },
      { $set: { _id: newObjectId } },
      { new: true }
    );

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.test = (req, res) => {
  res.json("test is working");
};
