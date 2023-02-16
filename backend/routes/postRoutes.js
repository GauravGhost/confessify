const router = require('express').Router()
const verifyJWT = require('../middleware/JwtAuth')
const { newPost, submitLike, submitComment, deletePost, editPost, getComments, getLikes, deleteComment } = require('../components/posts/postController')

// Middleware
router.use('/', verifyJWT)

// Private Routes
router.route('/newpost')
    .post(newPost)

router.route('/editpost/:postID')
    .put(editPost)

router.route('/deletepost/:postID')
    .delete(deletePost)

router.route('/submitlike/:postID')
    .post(submitLike)

router.route('/submitcomment/:postID')
    .post(submitComment)

router.route('/deletecomment/:postID/:commentID')
    .delete(deleteComment)

router.route('/getcomments/:postID')
    .get(getComments)

router.route('/getlikes/:postID')
    .get(getLikes)

module.exports = router;