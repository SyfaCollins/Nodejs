class BadRequest extends Error{
    constructor(message,statusCode){
        super(message)
    }
}

module.exports = BadRequest