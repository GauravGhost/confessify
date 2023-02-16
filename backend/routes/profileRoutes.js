const router = require('express').Router()
const verifyJWT = require('../middleware/JwtAuth')
const {
    getProfile,
    getFollower,
    getFollowing
} = require('../components/profiles/profileController')

// Middleware
router.use('/in', verifyJWT)
router.use('/getfollower', verifyJWT)
router.use('/getfollowing', verifyJWT)

// Private Routes
router.route('/in/:username')
    .get(getProfile)

router.route('/getfollower/:username')
    .get(getFollower)

router.route('/getfollowing/:username')
    .get(getFollowing)

module.exports = router;