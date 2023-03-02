const User = require('../users/userModel');
const Post = require('../posts/postModel')


// @description Get Other Profile without Anonymous post
// @route GET api/profile/in/:username
// Private 
const getProfile = async (req, res) => {
    const { username } = req.params
    if (!username) {
        return res.status(400).json({ message: "username Required" })
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User  not found" })
        }
        if (username === req.username) {
            var posts = await Post.find({ userId: user._id }).select('title body likes comments').lean().exec()
        }
        else {
            var posts = await Post.find({ userId: user._id, isAnonymous: false }).select('title body likes comments').lean().exec()
        }
        posts.map((post)=>{
            post.likes = post.likes.length
            post.comments = post.comments.length
        })
        const response = {
            username: user.username,
            fullname: user.fullname,
            follower: user.follower.length,
            following: user.following.length,
            posts: posts
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error })
    }
}

// @description Get follower's username
// @route GET api/profile/getfollower/:username
// Private 
const getFollower = async (req, res) => {
    const { username } = req.params
    if (!username) {
        return res.status(400).json({ message: "username is required" })
    }

    try {
        const user = await User.findOne({ username: username }).populate('follower', 'username').exec();
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user.follower)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

// @description Get following's username
// @route GET api/profile/getfollowing/:username
// Private 
const getFollowing = async (req, res) => {
    const { username } = req.params
    if (!username) {
        return res.status(400).json({ message: "username is required" })
    }

    try {
        const user = await User.findOne({ username: username }).populate('following', 'username').exec();
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user.following)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" })
    }
}



module.exports = {
    getProfile,
    getFollower,
    getFollowing
}