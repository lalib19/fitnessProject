const express = require("express");
const router = new express.Router();

router.get("/programs", (req, res, next) => {
    res.render("programs");
});


module.exports = router;