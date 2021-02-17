
exports.middlwareFunctionA = function(req, res, next) {
    console.log("middlwareFunctionA")
    next()
}

exports.middlwareFunctionB = function(req, res, next) {
    console.log("middlwareFunctionB")
    next()
}

exports.middlwareFunctionC = function(req, res, next) {    
    console.log("middlwareFunctionC")
    next()
}

exports.logRequestHeaders = function(req, res, next) {    
    console.log("logRequestHeaders:\n", JSON.stringify(req.headers))
    next()
}

exports.logRequestBody = function(req, res, next) {    
    console.log("logRequestBody:\n", JSON.stringify(req.body))
    next()
}