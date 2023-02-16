const User = require('../users/userModel')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')


// @description Login
// @route  POST /auth/login
// Public

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required!" })
    }
    const foundUser = await User.findOne({ username }).exec();

    if (!foundUser) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const accessToken = jwt.sign({
        userID: foundUser._id
    },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '5d' }
    )
    return res.status(200).json({ success: true, message: "LogIn successful", token: accessToken })
})

// @description Sign Up
// @route POST /auth/register
// Public

const register = asyncHandler(async (req, res) => {
    const { fullname, email, password, username, confirmPassword } = req.body;
    if (!username || !email || !password || !fullname || !confirmPassword) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const duplicateUsername = await User.findOne({ username }).lean().exec()
    const duplicateEmail = await User.findOne({ email }).lean().exec()
    if (duplicateUsername || duplicateEmail) {
        return res.status(400).json({ message: "Duplicate email or Username" })
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Password not matching" })
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            fullname,
            email,
            password: hashedPassword,
            confirmPassword,
            username,
        });
        
        const user = await User.findOne({ email: email})
        const accessToken = jwt.sign({
            userID: user._id
        },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '5d' }
        )
        return res.status(201).json({message: "New Account Created successfully", token: accessToken })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error })
    }
})

module.exports = {
    login,
    register
}