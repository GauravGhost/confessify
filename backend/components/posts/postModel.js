const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    isAnonymous: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    body: {
        type: String,
        trim: true,
        required: true,
        maxlength: 500,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: 0
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            content: {
                type: String,
                trim: true,
                required: true
            },
        }
    ]

})

module.exports = mongoose.model('Post', postSchema);