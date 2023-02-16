const mongoose = require('mongoose')
const { emailValidation, usernameValidation} = require('../../utils/validator')
const bcrypt  = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: 4,
        maxlength: 15,
        validate: usernameValidation
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 15
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate: emailValidation
    },
    password: {
        type: String,
        required: true,
    },
    follower: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);