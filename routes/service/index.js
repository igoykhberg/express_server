const express = require('express');
const router = express.Router();
let {
    middlwareFunctionA,
    middlwareFunctionB,
    middlwareFunctionC,
    logRequestHeaders,
    logRequestBody,
} = require('../../middleware/service');

router.get(
    '/test_endpoint_GET',
    [
        logRequestHeaders,
        middlwareFunctionA,
        middlwareFunctionB,
        middlwareFunctionC,
    ],
    function (req, res, next) {
        res.status(200).send('ok');
    }
);

router.post(
    '/test_endpoint_POST',
    [logRequestHeaders, logRequestBody],
    function (req, res, next) {
        res.status(200).send('ok');
    }
);

module.exports = router;
