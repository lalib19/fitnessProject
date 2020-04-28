const express = require("express");
const router = new express.Router();
const program = require("../models/Program")


router.get("/programs", (req, res, next) => {
    program.find()
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