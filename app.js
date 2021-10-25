require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();

const { devConsoleLogger, accessLogger } = require('./utils/loggers');
app.use(accessLogger);
process.env.NODE_ENV &&
    process.env.NODE_ENV.trim() === 'dev' &&
    app.use(devConsoleLogger);

const { normalizePort, onError } = require('./utils/app');

const cors = require('cors');
const createError = require('http-errors');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const serviceRouter = require('./routes/service');

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/v01/service', serviceRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    process.env.NODE_ENV &&
        process.env.NODE_ENV.trim() === 'dev' &&
        false &&
        console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};

    res.status(err.status || 500);
    res.json('error');
});

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
    process.env.NODE_ENV &&
        process.env.NODE_ENV.trim() === 'dev' &&
        console.info(
            `${process.env.npm_package_name} version ${process.env.npm_package_version} listening on port: ${port}`
        );
    !process.env.PORT &&
        console.info(`current port ${port} is default, see .env parameters`);
});

server.on('error', onError);
