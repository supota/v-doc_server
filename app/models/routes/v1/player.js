const express = require('express');
const router = express.Router();
const os = require('os');
const hostname = os.hostname();

// GET  http://localhost:3000/v1/player
router.get('/', function (req, res) {
    const getPlayerData = [
        { name: '今井美香', sex: 0 },
        { name: '紀川孝太', sex: 1 },
        { name: '山田太郎', sex: 1 }
    ];
    res.json(getPlayerData);
    console.log("GET: " + req.protocol + '://' + req.headers.host + req.url + "v1/player")
});

// POST  http://localhost:3000/v1/player
router.post('/', (req, res) => {
    let playerList = []
    
    const postPlayerData = req.body;
    const postPlayerName = postPlayerData.title;
    const postPlayerSex = postPlayerData.sex
    const playerId = uuidv4();
    
    const playerItem = {
        playerId,
        name: postPlayerName,
        sex: postPlayerSex
    };
    playerList.push(playerItem);
    res.json(playerItem);
    console.log("POST: " + req.protocol + '://' + req.headers.host + req.url + "v1/player")
});

//routerをモジュールとして扱う準備
module.exports = router;