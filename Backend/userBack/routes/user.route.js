const express = require('express');
const { login, signup, allUsers } = require('../controllers/user.Controller');
const { isLoggedIn } = require('../middleware/isLoggedIn');
const { isAdmin } = require('../middleware/isAdmin');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

router.get('/all-users', isLoggedIn, isAdmin, allUsers);






module.exports = router;
