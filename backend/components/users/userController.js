const User = require('./userModel')

// @GET all users
// @route GET api/profile/in
// Public

const allUser = async( req, res) => {
    const getAllUser = await User.find({}).select('-password').lean()
    // console.log(getAllUser)
    if(!getAllUser?.length) {
        return res.status(404).json({message: "No user found"})
    }
    return res.status(200).json(getAllUser)
}

// @description follow user
// @route POST api/profile/follow
// Private

const follow = async( req, res) => {
    const userID = req.userID
    const user = await User.findById(userID);
    const followId = req.params.userId;
    try {
        if(user.following.includes(followId)){
            return res.status(400).json({message: "Aready follow this user"})
        }
        user.following.push(followId);
        await user.save();
        const followUser = await User.findById(followId);
        followUser.follower.push(user._id);
        await followUser.save()
        return res.status(201).json(await User.findById(userID).populate("following"))
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error: error})
    }

}

// @description unfollow user
// @route POST api/profile/unfollow
// Private

const unfollow =async(req, res) => {
    const userID = req.userID;
    const user = await User.findById(userID);
    const unfollowId = req.params.userId;

    if(!user.following.includes(unfollowId)){
        return res.status(400).json({message: "Internal Server Error"})
    }
    try {
        
        user.following.pull(unfollowId);
        await user.save();

        const unfollowUser = await User.findById(unfollowId);
        unfollowUser.follower.pull(user._id);
        await unfollowUser.save();
        return res.json(await User.findById(userID).populate("following"))
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error: error})
    }
}
module.exports = {
    allUser,
    follow,
    unfollow
}