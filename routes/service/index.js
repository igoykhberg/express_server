const express = require('express');
const router = express.Router();
let {
    middlwareFunctionA,
    middlwareFunctionB,
    middlwareFunctionC,
} = require('../../middleware/service')

router.get('/test_endpoint', [middlwareFunctionA, middlwareFunctionB, middlwareFunctionC], function(req, res, next){
    res.status(200).send("ok")
})

module.exports = router;