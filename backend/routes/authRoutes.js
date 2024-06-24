const express = require('express')
const router = express.Router()
const { Login, Register } = require('../controllers/authController')

router.post("/signin", Login)
router.post("/signup", Register)

module.exports = router