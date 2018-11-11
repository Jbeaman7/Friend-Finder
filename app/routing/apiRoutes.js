// =======================================================
//Dependencies
const express = require("express");
const friends = require("../data/friends.js");
const router = express.Router();

// =======================================================
//Routes
router.get("/friends", (req, res) => {
   res.json(friends);
});

router.post("/friends", (req, res) => {
    let userInput = req.body;
    let userResponses = userInput.scores;
    let matchName = "";
    let matchImage = "";
    let totalDifference = 5000;
    for (let i = 0; i < friends.length; i++) {
        const diff = 0;
        for (let j = 0; j < userResponses.length; j++) {
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            
        }
        if(diff < totalDifference){
            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
        }
    }
    friends.push(userInput);
    res.json({matchName: matchName, matchImage: matchImage})
    
    res.end();
});

module.exports = router;