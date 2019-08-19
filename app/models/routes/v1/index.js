const express = require('express');
const router = express.Router();
let connection = require('../../../mysql');

router.use('/player', require('./player.js'));

module.exports = router;