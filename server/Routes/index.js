const express = require("express");
const passport = require("passport");
const authController = require("../Controller/routeApi");

const router = express.Router();

// Test Route
router.get("/", authController.test);

// Google OAuth Login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  authController.googleCallback
);

// GitHub Login
router.get("/auth/github", passport.authenticate("github"));

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  authController.githubCallback
);

// Logout
router.get("/logout", authController.logout);

module.exports = router;
