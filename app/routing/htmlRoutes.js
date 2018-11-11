// =======================================================
//Dependencies
const express = require("express");
const path = require("path");
const router = express.Router();

// =======================================================
//Routes
router.get('/', (req, res) => {
    res.sendfile(path.join(__dirname,"../public", "home.html"))
});

router.get('/survey', (req, res) => {
    res.sendfile(path.join(__dirname,"../public", "survey.html"))
});

module.exports = router;