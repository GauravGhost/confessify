const router = require('express').Router()

router.use("/auth", require("./authRoutes"));

router.use("/profile", require("./profileRoutes"));

// router.use("/post", require("./postRoutes"));

module.exports = router;