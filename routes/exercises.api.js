const express = require("express");
const router = express.Router();
const Exercise = require("../models/Exercise");

/* GET users listing. */

// /api/users
router.get("/api/exercises", function (req, res, next) {
    // res.send("Welcome...");
    const query = req.query;
    console.log(query)
    Exercise.find(query)
        .then((dbResult) => {
            res.status(200).json(dbResult);
        })
        .catch((dbErr) => {
            res.status(500).json({
                message: "An error occured"
            });
        });
});

module.exports = router;