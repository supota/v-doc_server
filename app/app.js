const express = require('express');
const multer = require('multer');
const app = express();
app.use(multer().none());
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

let router = require('./models/routes/v1/');
app.use('/v1/', router);

//サーバ起動
app.listen(port, () => console.log('Listening on port ' + port));