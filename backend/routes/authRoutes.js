const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { protect } = require('../middleware/authMiddleware'); // Adjust the path as necessary

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET);
    
    // Set the token as a secure HTTP-only cookie
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
    console.log('token is: ', token);
    
    // Redirect to the desired route
    res.redirect('http://localhost:5173/create-resume'); // Adjust the redirect URL as needed
  }
);

// Protected route to fetch current user information
router.get('/user', protect, (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// router.get('/logout', (req, res, next) => {
//   req.logout((err) => {
//     if (err) {
//       return next(err);
//     }
    
//     // Clear the token cookie on logout
//     res.clearCookie('token');
    
//     res.redirect('/login'); // Redirect to login page after logout
//   });
// });
router.get('/logout', (req, res) => {
  req.logout(() => {
    // Clear the token cookie on logout
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
  });
});


module.exports = router;
