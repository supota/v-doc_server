const express = require('express');
const router = express.Router();

router.use('/player', require('./player.js'));

module.exports = router;