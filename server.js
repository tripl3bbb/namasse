const express = require("express");
const ejs = require('ejs');
const app = express();
const port = 3002;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use("/", require("./routes/index"));
app.use("/contact", require("./routes/contact"));
app.use("/games", require("./routes/games"));
app.use("/gta", require("./routes/gta"));
app.use("/skyrim", require("./routes/skyrim"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);