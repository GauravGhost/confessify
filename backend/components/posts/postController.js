const Post = require('./postModel')
const User = require('../users/userModel');
const { post } = require('../../routes');
const mongoose = require('mongoose')
const {idValidation} = require('../../utils/validator')

// @description Create new post
// @route POST api/post/newpost
// Private

const newPost = async (req, res) => {
    const { username, isAnonymous, title, body } = req.body
    const userID = req.userID
    const isValidUserID = idValidation(userID)
    if (!username || !title || !body || !isValidUserID) {
        return res.status(400).json({ message: "All Fields are required" })
    }
    const user = await User.findById(userID);
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    if (username !== user.username) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const post = await Post.create({
            userId: req.userID,
            isAnonymous,
            title,
            body
        })
        return res.status(201).json({ message: "New Post created Successfully", data: post })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

// @description Edit Post
// @route PUT api/post/editpost
// Private
const editPost = async (req, res) => {
    const { username, title, content } = req.body
    const { postID } = req.params
    const isValidPostID = idValidation(postID)
    if (!title || !content || !isValidPostID) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const post = await Post.findById(postID);
    if (!post) {
        return res.status(404).json({ message: "Post not found" })
    }
    const user = await User.findById(post.userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    if (username !== user.username) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        await Post.findOneAndUpdate({ _id: post._id }, { title: title, body: content })
        return res.status(200).json({ message: "Edited Successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error })
    }
}

// @description Delete Post
// @route DELETE api/post/deletepost
// Private
const deletePost = async (req, res) => {
    const { postID } = req.params;
    const isValidPostID = idValidation(postID)
    if (!postID || !isValidPostID) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const post = await Post.findById(postID);
    if (!post) {
        return res.status(404).json({ message: "User not found" })
    }
    const user = await User.findById(post.userId)
    if (user.username !== req.username) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const deleteUser = await Post.findByIdAndDelete(post._id);
        return res.status(200).json({ message: "Post Deleted Successfully", deleted_user: deleteUser })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error })
    }
}

// @description Submit Like
// @route POST api/post/submitlike
// Private
const submitLike = async (req, res) => {
    const { postID } = req.params
    const isValidPostID = idValidation(postID)
    if (!postID || !isValidPostID) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const post = await Post.findById(postID);
    if (!post) {
        return res.status(404).json({ message: "Post Not found!" })
    }
    const user = await User.findById(req.userID);
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    try {
        if (post.likes.includes(user._id)) {
            post.likes.pull(user._id);
            await post.save()
            return res.status(200).json({ message: "Unliked Successfully" })
        } else {
            post.likes.push(user._id);
            await post.save()
            return res.status(200).json({ message: "Liked Successfully" })
        }

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error })
    }

}

// @description Submit Comment
// @route POST api/post/submitcomment
// Private
const submitComment = async (req, res) => {
    const { postID } = req.params;
    const { username, content } = req.body;
    const isValidPostID = idValidation(postID)
    if (!postID || !content || !username || !isValidPostID) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const post = await Post.findById(postID);
    if (!post) {
        return res.status(404).json({ message: "Post Not found!" })
    }
    const user = await User.findById(req.userID);
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    if (username !== user.username) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const data = {
            user: user._id,
            content: content
        }
        post.comments.push(data);
        post.save()
        return res.status(200).json({ message: "Commented Successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error })
    }
}


// @description Delete Comment
// @route POST api/post/deletecomment
// Private
const deleteComment = async (req, res) => {
    const { postID, commentID } = req.params;
    const { username } = req.body;
    const isValidPostID = idValidation(postID)
    const isValidCommentID = idValidation(commentID)
    if (!postID || !commentID || !isValidPostID || !isValidCommentID) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const post = await Post.findById(postID);
    if (!post) {
        return res.status(404).json({ message: "Post not found!" })
    }
    const user = await User.findOne({username: username});
    if(!user) {
        return res.status(404).json({message: "No user found"})
    }
    if(user.username !== req.username){
        return res.status(401).json({message: "Unauthorized"})
    }
    const findUser = await Post.findOne({_id:postID}, {comments: {$elemMatch:{_id: commentID}}})
    const commentedUserId = findUser.comments[0].user;
    const commentedUser = await User.findById(commentedUserId)
    if(commentedUser.username !== user.username){
        return res.status(401).json({message:  "Unauthorized User"})
    }
    try {
        const deletedPost = await Post.updateOne({ _id: postID }, { $pull: { comments: { _id: commentID } } })
        return res.status(200).json({ message: "Comment Deleted Successfully", data: deletedPost.comments })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error })
    }
}

// @description List all Users comments
// @route GET api/post/getcomments
// Private
const getComments = async (req, res) => {
    const { postID } = req.params
    if (!postID) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const post = await Post.findById(postID);
    if (!post) {
        return res.status(404).json({ message: "User not found" })
    }
    const user = await User.findById(post.user);
    if (!user) {
        return res.status(404).json({ messsage: "User Not found" })
    }
    try {
        return res.status(200).json(post.comments)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server error", error: error })
    }
}

// @description List all Users Likes
// @route GET api/post/getlikes
// Private
const getLikes = async (req, res) => {
    const { postID } = req.params
    const isValid = await idValidation(postID)
    if (!postID || !isValid) {
        return res.status(400).json({ message: "Please Enter Valid Id" })
    }
    const post = await Post.findById(postID).populate('likes', 'username');
    if (!post) {
        return res.status(404).json({ message: "User not found" })
    }
    try {

        return res.status(200).json(post.likes)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server error", error: error })
    }
}

module.exports = {
    newPost,
    editPost,
    deletePost,
    submitLike,
    submitComment,
    deleteComment,
    getComments,
    getLikes
}