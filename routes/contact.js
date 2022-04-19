const express = require("express");

const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+"/contact.ejs"))
    .post((req, res) => res.send("POST"));
module.exports = router;