const express = require("express");
const router = new express.Router();
const exercise = require("../models/Exercise");

router.get("/exercises", (req, res, next) => {
    exercise.find()
        .then(dbResult => {
            res.render("exercises", {
                exercises: dbResult
            });
        })
        .catch(dbErr => {
            console.log(dbErr);
        });
});

router.post("/exercises", (req, res, next) => {
    res.render("createProgram", {
        exercisesList: req.body
    })
});


module.exports = router;