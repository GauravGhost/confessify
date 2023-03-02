const router = require('express').Router()
const verifyJWT = require('../middleware/JwtAuth')
const {allUser, follow, unfollow} = require('../components/users/userController')

// Middleware

router.use('/follow', verifyJWT)
router.use('/unfollow', verifyJWT)


// Public Routes
router.route('/alluser')
    .get(allUser)


// Private Routes
router.route('/follow/:userId')
    .post(follow)

router.route('/unfollow/:userId')
    .delete(unfollow)

    
module.exports = router;