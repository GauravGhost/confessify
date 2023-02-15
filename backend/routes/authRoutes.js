const router = require('express').Router()
const authController = require('../components/auth/authController')

// PUBLIC ROUTE
router.route('/register')
    .post(authController.register)

router.route('/login')
    .post(authController.login)


module.exports = router;