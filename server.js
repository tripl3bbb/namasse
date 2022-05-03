const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser=require("body-parser")
const ejs = require('ejs');

const port = 3002;

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://nahzryuab:stayugly241042@cluster0.r3edx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true})
mongoose
    .connect(Shop)
    .then((res) => console.log("Connected to DB"))
    .catch((error) => console.log("Error"));
const users = {
    username: String,
    password: String
}
const Shop=mongoose.model("Users",users)
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use("/", require("./routes/index"));

router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+"./routes/index.ejs"))
    .post((req,res)=>{
        let newUser= new Shop({
            username: req.body.username,
            password: req.body.password
        })
        newUser.save();
        res.redirect('/');
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