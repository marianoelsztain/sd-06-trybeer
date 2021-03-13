const { Router } = require('express');
const user = require('./user');
const userService = require('../services/userService');

const router = Router();

router.post('/login', userService.validateFieldLogin, user.verifyLogin);

router.post('/register', userService.validateFieldUser, user.verifyUser);

module.exports = router;
