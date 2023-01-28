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
        max: 30
    },
    body: {
        type: String,
        required: true,
        max: 500,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: 0
        }
    ],
    comment: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                default: 0
            },
            content: {
                type: String,
                required: true
            },
        }
    ]

})

const Post = mongoose.model('Post', postSchema);