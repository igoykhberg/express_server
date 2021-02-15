
const logger = require('morgan');
const loggerConfig = require('./config.json');
const path = require('path');
const rfs = require('rotating-file-stream')

logger.token('env', () =>  (process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "defualt"))
logger.token('request_body', req => JSON.stringify(req.body))
logger.token('baseUrl', req => req.baseUrl)

exports.devConsoleLogger = logger(loggerConfig.formatAccess)

exports.accessLogger = logger(loggerConfig.formatAccess, {
    stream: rfs.createStream(loggerConfig.accessLogFile, {
        interval: '1d',
        path: path.join(__dirname, '../../', loggerConfig.logFolder)
    })
})
