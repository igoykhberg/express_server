var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.status(200).append('Access-Control-Allow-Origin', '*').send('ok');
});

module.exports = router;
