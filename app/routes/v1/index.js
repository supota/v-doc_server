'use strict';

const express = require('express');
const router = express.Router();

router.use('/player', require('./api.js'));

module.exports = router;