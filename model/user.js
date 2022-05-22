const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

let something = new mongoose.model('Users', userSchema)
module.exports = something

