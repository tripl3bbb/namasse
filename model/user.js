const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('Post', userSchema)

