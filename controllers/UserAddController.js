const Users = require("../model/user");
module.exports.addUser = async (req,res)=> {
    if (!req.body.username && !req.body.password) {
        res.status(400).render('../ index', {mydata: "Content can not be empty!"})
    }
    const user = new Users({
        Username: req.body.username,
        Password: req.body.password,
    })
    await user.save().then(Data=>{res.render('../index', {mydata: "user "+ data.username +" created succesfully!"})
    }).catch(err => {
        res.render('index', {mydata: err.message || "Some error occurred while creating user"})
        res.redirect('/')
    })}