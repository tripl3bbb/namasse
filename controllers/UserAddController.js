const Users = require("../model/user");
module.exports.addUser = (req,res)=> {
    let newUsers = new Users({
        Username: req.body.username,
        Email: req.body.email,
    })
    newUsers.save();
    res.redirect('/');
}