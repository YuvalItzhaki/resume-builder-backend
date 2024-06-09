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
// backend/routes/authRoutes.js
const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:5173/dashboard'); // Adjust the redirect URL as needed
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
