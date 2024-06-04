// // backend/routes/authRoutes.js
// const express = require('express');
// const router = express.Router();
// const { login, register } = require('../controllers/authController');

// // POST /api/login
// // router.post('/login', login);
// router.post('/register', function(req, res){register});

// module.exports = router;
// backend/routes/authRoutes.js
// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

module.exports = router;
