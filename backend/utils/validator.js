// EMAIL
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// USERNAME
const usernameValidation = /^[a-zA-Z0-9._]{3,20}$/



module.exports = {
    emailValidation,
    usernameValidation,
}