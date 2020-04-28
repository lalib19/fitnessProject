const express = require("express");
const router = new express.Router();
const Program = require("../models/Program")
const Exercise = require("../models/Exercise")

router.get("/programs", (req, res, next) => {
    res.render("programs");
});


module.exports = router;