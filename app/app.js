const express = require('express');
const multer = require('multer');
const app = express();
const bodyParser = require('body-parser');
let router = require('./models/routes/v1/');
const port = process.env.PORT || 3000;
const helmet = require("helmet");

const Player = require('./models/player')
const Post = require('./models/post')

app.use(multer().none());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(helmet());
app.use('/v1/', router);
app.listen(port, () => console.log('PORT:' + port + '\n---------'));