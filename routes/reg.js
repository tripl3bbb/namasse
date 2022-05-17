const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Post = require('../model/user')
const UserAddController = require('../controllers/UserAddController')
router
    .route("/")
    .get((req, res) => res.render('/reg.ejs'))
    .post(UserAddController.addUser)

module.exports = router;
