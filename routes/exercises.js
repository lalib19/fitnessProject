const express = require("express");
const router = new express.Router();


router.get("/exercises", (req, res, next) => {
    res.render("exercises");
});



module.exports = router;