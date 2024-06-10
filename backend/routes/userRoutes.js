// backend/routes/userRoutes.js
const express = require('express');
const { authUser, registerUser } = require('../controllers/userController');
const router = express.Router();

router.post('/login', authUser);
router.route('/register').post(registerUser);


module.exports = router;
