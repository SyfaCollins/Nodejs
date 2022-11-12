const express = require('express')
const router = express.Router()

const {registerUser,loginUser} = require('../controllers/auth')

router.get('/register',registerUser)
router.get('/login',loginUser)
