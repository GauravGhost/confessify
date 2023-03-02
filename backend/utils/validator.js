const mongoose = require('mongoose')
// EMAIL
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// USERNAME
const usernameValidation = /^[a-zA-Z0-9._]{3,20}$/

// const idValidation = mongoose.Types.ObjectId.isValid(id)
const idValidation = async(...id) => {
    return mongoose.Types.ObjectId.isValid(...id)
}

module.exports = {
    emailValidation,
    usernameValidation,
    idValidation
}