const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const db = require('./config/config.js')
const swaggerUi = require('swagger-ui-express')
    swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))

mongoose
    .connect(db.uri)
    .then((res) => console.log("Connected to DB"))
    .catch((error) => console.log("Error"));



app.use("/", require("./routes/index"));
app.use("/contact", require("./routes/contact"));
app.use("/games", require("./routes/games"));
app.use("/gta", require("./routes/gta"));
app.use("/skyrim", require("./routes/skyrim"));
app.use("/reg", require("./routes/reg"));

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
)



