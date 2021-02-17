exports.normalizePort = function(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
  
exports.onError = function(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
        console.error('port requires elevated privileges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error('port is already in use');
        process.exit(1);
        break;
    default:
        throw error;
    }
}
  