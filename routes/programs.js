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

router.get("/programs/:id", (req, res, next) => {
    Program.findById(req.params.id)
        .then(program => {
            const exercises = [];
            program.exercisesList.forEach(exerciseId => {
                Exercise.findById(exerciseId).then(exercise => {
                    exercises.push(exercise)
                }).catch(err => console.log(err))
            });
            res.render("programExercises", {
                exercises: exercises
            });
        })
        .catch(dbErr => {
            console.log(dbErr);
        });
});

router.get("/myPrograms", (req, res, next) => {
    Exercise.find()
        .then(dbResult => {
            res.render("myPrograms", {
                favorites: dbResult
            });
            console.log(dbResult);
        })
        .catch(err => {
            console.log(err);
        });
});
 
module.exports = router;