const jwt = require('jsonwebtoken')
const User = require('../components/users/userModel')

const verifyJWT = (req, res, next) => {
    let token
    const { authorization } = req.headers;
    if (!authorization && !authorization?.startsWith('Bearer')) {
        return res.status(400).json({ message: "Bad request or Token not found" })
    }
    try {
        token = authorization.split(' ')[1];

        // VERIFY TOKEN
        const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const fetchUser = async () => {
            const user = await User.findById(userID)
            req.userID = user._id;
            req.username = user.username;
            // console.log(req.userID, req.username)
            next()
        }
        fetchUser();
        
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", custom: "verify error", error: error })
    }
}

module.exports = verifyJWT