const express = require('express')
const { regesterUser, authUser } = require('../controller/UserControl')
const router = express.Router()

router.route("/signup").post(regesterUser)
router.route('/login').post(authUser)



module.exports = router