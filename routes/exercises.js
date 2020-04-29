const express = require("express");
const router = new express.Router();
const exercise = require("../models/Exercise");
const Program = require("../models/Program")

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
    console.log(req.body)
    const exercisesList = req.body.exercisesList.split(",")
    Program.create({
        name: req.body.programName,
        description: req.body.programDescription,
        exercisesList: exercisesList,
        creator: req.session.currentUser._id
    }).then(dbRes => console.log(dbRes)).catch(err => console.log(err))
});


module.exports = router;