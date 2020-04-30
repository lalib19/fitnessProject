const express = require('express');
const router = express.Router();
const Program = require("../models/Program")
const Exercise = require("../models/Exercise")

/* GET home page. */
router.get(["/", "/home"], (req, res, next) => {
  res.render("index");
});

router.get("/program-edit/:id", (req, res, next) => {
  Promise.all([Program.findById(req.params.id), Exercise.find({})])
    .then((results) => {
      res.render("program_edit.hbs", {
        program: results[0],
        exercises: results[1],
      });
    })
    .catch(next);
});

router.post("/prod-edit/:id", (req, res, next) => {
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