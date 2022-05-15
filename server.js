// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs=require('ejs')
// const methodOverride = require('method-override')
// const app = express();
// //const port = 3000
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.set('view engine', 'ejs')
// app.use(express.static('public'))
//
// app.use(methodOverride('_method'))
//
// const UserRoute = require('./routes/index')
// app.use('/user',UserRoute)
//
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// const {router} = require("express/lib/application");
//
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb+srv://nahzryuab:stayugly241042@cluster0.r3edx.mongodb.net/Shop?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Database Connected Successfully!!");
// }).catch(err => {
//     console.log('Could not connect to the database', err);
//     process.exit();
// });
//
//
// app.get('/', (req, res) => {
//     res.render('index');
// });
//
// /*app.post('/', (req, res) => {
//     create(req,res)
// });*/
//
// /*app.get('/', (req, res) => {
//     findAll(req, res)
// });*/
//
// app.get('/find', (req, res) => {
//     res.render('find');
// });
// /*app.get('/findbyemail', (req, res) => {
//     findOne(req,res)
// });*/
//
// app.get('/update', (req, res) => {
//     res.render('update');
// });
//
// app.get('/delete', (req, res) => {
//     res.render('delete');
// });
//
//
// let port = process.env.PORT;
// if (port == null || port == "") {
//     port = 3000;
// }
//
// app.listen(port, () => {
//     console.log(`Server is listening on port http://localhost:${port}`);
// });







const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser=require("body-parser")
const router=express.Router();
const ejs = require('ejs');

const port = 3002;

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://nahzryuab:stayugly241042@cluster0.r3edx.mongodb.net/Shop?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true})

const users = {
    username: String,
    password: String
}

const Shop=mongoose.model("Users",users)
app.use(express('public'));
app.set('view engine', 'ejs');


app.use("/", require("./routes/index"));

router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+"./routes/index"))
    .post((req,res)=>{
        let newUser= new Shop({
            username: req.body.username,
            password: req.body.password
        })
        newUser.save();
        res.redirect('/index');
    })

module.exports = router;

app.get("/",function (req,res){
    res.sendFile(__dirname+"/routes/index")
})
app.post("/", function (req,res){
    let newUser= new Shop({
        username:req.body.username,
        password:req.body.password
    })
    newUser.save();
    res.redirect("/")
})
app.use("/contact", require("./routes/contact"));
app.use("/games", require("./routes/games"));
app.use("/gta", require("./routes/gta"));
app.use("/skyrim", require("./routes/skyrim"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);