// middleware/caslMiddleware.js
const { AbilityBuilder, Ability } = require("@casl/ability");
const User = require("../Model/user");

async function defineAbilitiesForUser(user) {
  const { can, rules } = AbilityBuilder.extract();

  if (user.role === "admin") {
    can("manage", "all");
  } else {
    can("read", "all");
    can("create", "Post");
    can("update", "Post", { author: user.id });
    can("delete", "Post", { author: user.id });
  }

  return new Ability(rules);
}

async function caslMiddleware(req, res, next) {
  try {
    const user = await User.findById(req.user.id); // Assuming you have user information in the request object
    req.ability = await defineAbilitiesForUser(user);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = caslMiddleware;
