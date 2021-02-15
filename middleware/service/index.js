
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
