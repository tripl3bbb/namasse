const express = require("express");

const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname+"/reg.ejs"))
    .post(controller.addUser);
module.exports = router;