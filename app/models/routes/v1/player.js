const express = require('express');
const router = express.Router();

// GET  http://localhost:3000/v1/player
router.get('/', function (req, res){
    res.json({
        message: "This is player api"
    })
});

// GET  http://localhost:3000/v1/player/test
router.get('/test', function (req, res) {
    const playerData = [
        { name: '今井美香', sex: 0 },
        { name: '紀川孝太', sex: 1 },
        { name: '山田太郎', sex: 1 }
    ];
    res.json(playerData);
});

//routerをモジュールとして扱う準備
module.exports = router;