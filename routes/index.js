const express = require('express');
const router = express.Router();
const Program = require("../models/Program")
const Exercise = require("../models/Exercise")

/* GET home page. */
router.get(["/", "/home"], (req, res, next) => {
  res.render("index");
});




module.exports = router;