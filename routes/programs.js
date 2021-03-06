const express = require("express");
const router = new express.Router();
const Program = require("../models/Program")
const Exercise = require("../models/Exercise")

router.get("/programs", (req, res, next) => {
    Program.find().limit(3)
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
    Program.findById(req.params.id).populate("exercisesList")
        .then(program => {
            // const exercises = [];
            // program.exercisesList.forEach(exerciseId => {
            //     Exercise.findById(exerciseId).then(exercise => {
            //         exercises.push(exercise)
            //     }).catch(err => console.log(err))
            // });
            res.render("programExercises", {
                exercises: program.exercisesList
            });
        })
        .catch(dbErr => {
            console.log(dbErr);
        });
});

router.get("/myPrograms", (req, res, next) => {
    Program.find({
            creator: req.session.currentUser._id
        })
        // .populate("exercisesList")
        .then(dbResult => {
            res.render("myPrograms", {
                programs: dbResult
            });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/myPrograms/:id", (req, res, next) => {
    Program.findById(req.params.id).populate("exercisesList")
        .then(program => {
            // const exercises = [];
            // program.exercisesList.forEach(exerciseId => {
            //     Exercise.findById(exerciseId).then(exercise => {
            //         exercises.push(exercise)
            //     }).catch(err => console.log(err))
            // });
            res.render("myProgramExercises", {
                exercises: program.exercisesList,
                programName: program.name
            });
        })
        .catch(dbErr => {
            console.log(dbErr);
        });
})


router.get("/delete/:id", (req, res, next) => {
    Program
        .findByIdAndDelete(req.params.id)
        .then(dbRes => {
            req.flash("success", "program has been deleted");
            res.redirect("/myPrograms");
        })
        .catch(next);
});

router.get("/myPrograms/:id", (req, res) => {
    Program.findById(req.params.id)
        .then((dbResult) => {
            res.render("myPrograms.hbs", {
                program: dbResult,
                error: req.flash("error"),
            });
        })
        .catch((dbErr) => {
            console.log(dbErr);
        });
});

router.post("/myPrograms/:id", (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    if (req.body.name === "" || req.body.description === "" || req.body.exercisesList === "") {
        req.flash("error", "Fill in everything please");
        res.redirect(`/myPrograms/${req.params.id}`);
    } else {
        Program.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
            .then((dbResult) => {
                res.redirect("/foods/manage");
            })
            .catch((dbErr) => {
                console.log(dbErr);
            });
    }
});

router.get("/program-edit/:id", (req, res, next) => {
    Program.findById(req.params.id).populate("exercisesList")
        .then(program => {
            // const exercises = [];
            // program.exercisesList.forEach(exerciseId => {
            //     Exercise.findById(exerciseId).then(exercise => {
            //         exercises.push(exercise)
            //     }).catch(err => console.log(err))
            // });
            res.render("program_edit.hbs", {
                exercises: program.exercisesList,
                program: program
            });
        })
        .catch(dbErr => {
            console.log(dbErr);
        });
});

router.post("/prog-edit/:id", (req, res, next) => {
    Program.findByIdAndUpdate(req.params.id, {
            name: req.body.programName,
            description: req.body.programDescription
        }, {
            new: true
        })
        .then((updatedProgram) => {
            res.redirect("/myPrograms");
        })
        .catch(err => {
            next(err);
        });
});


module.exports = router;