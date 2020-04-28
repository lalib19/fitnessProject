const express = require("express");
const router = new express.Router();
const Program = require("../models/Program")
const Exercise = require("../models/Exercise")

router.get("/programs", (req, res, next) => {
    Program.find()
        .then(dbResult => {
            res.render("programs", {
                programs: dbResult
            });
        })
        .catch(dbErr => {
            console.log(dbErr);
        });
});

module.exports = router;