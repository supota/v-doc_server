var express = require('express');
var router = express.Router();

// GET  http://localhost:3000/v1/player/test
router.get('/test', function (req, res) {
    res.json({
        message: "This is player api"
    });
});

//routerをモジュールとして扱う準備
module.exports = router;