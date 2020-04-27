const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/signin", (req, res) => {
  res.render("signin",{msg:req.session.msg});
});

/** AUTH MADE WITH ASYNC AWAIT */

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      // This will be handled, by the eraseSessionMessage middelware in app.js
      req.session.msg = { status: 401, text: "Invalid credentials" };
      /**  Same could be done using the flash middleware **/ 
      // req.flash("error", "Invalid credentials");  // If you wanted to use flash you could aswell, you would have to handle i
      return res.redirect("/signin");
    }
    if (!bcrypt.compareSync(password, foundUser.password)) {
      req.session.msg = { status: 401, text: "Invalid credentials" };
      return res.redirect("/signin");
    }
    req.session.currentUser = foundUser;
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/signup", (req, res) => {
  res.render("signup",{msg:req.session.msg});
});



router.post("/signup", async (req, res, next) => {
  const { email, name, lastName, password } = req.body;

  try {
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      req.session.msg = { status: 401, text: "Email already taken." };
      return res.redirect("/signup");
    }
    const salt = 10;
    const hashedPassword = bcrypt.hashSync(password, salt);
    await User.create({
      name,
      lastName,
      email,
      password: hashedPassword,
    });
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;