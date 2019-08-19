const express = require('express');
const router = express.Router();
const moment = require('moment');
let connection = require('../../../mysql');

// GET  http://localhost:3000/v1/player
router.get('/', function (req, res, next) {
    const getPlayerData = [
        { name: '今井美香', sex: 0 },
        { name: '紀川孝太', sex: 1 },
        { name: '山田太郎', sex: 1 }
    ];
    res.json(getPlayerData);
    console.log("GET: " + req.protocol + '://' + req.headers.host + req.url + "v1/player")
});

// POST  http://localhost:3000/v1/player
router.post('/', (req, res, next) => {
    let playerList = []
    
    const postPlayerData = req.body;
    const postPlayerName = postPlayerData.title;
    const postPlayerSex = postPlayerData.sex
    const playerId = uuidv4();
    const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    
    const playerItem = {
        playerId,
        name: postPlayerName,
        sex: postPlayerSex
    };
    playerList.push(playerItem);
    res.json(playerItem);

    let query = `INSERT INTO boards (title, created_at) VALUES (${title}, ${createdAt})`;
    connection.query(query, function (err, rows) {
        res.redirect('/');
    });

    console.log("POST: " + req.protocol + '://' + req.headers.host + req.url + "v1/player" + "/n    : " + playerItem)
});

//routerをモジュールとして扱う準備
module.exports = router;