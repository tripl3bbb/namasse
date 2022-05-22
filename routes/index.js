const express = require("express");
const router = express.Router();
const controller = require('../controllers/UserAddController')
router
    .route("/")
    .get((req, res) => res.render(__dirname+"/index.ejs"))
    .post(controller.addUser);
module.exports = router;