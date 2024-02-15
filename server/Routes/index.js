const express = require("express");
const passport = require("passport");
const authController = require("../Controller/routeApi");

const router = express.Router();

// Test Route
router.get("/", authController.test);
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

// Google OAuth Login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

// GitHub Login
router.get("/auth/github", passport.authenticate("github"));

router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
    successRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

// Logout
router.get("/logout", authController.logout);

// Session Check
router.get("/check-session", authController.checkSession);

module.exports = router;
