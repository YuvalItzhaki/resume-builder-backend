// backend/routes/userRoutes.js
const express = require('express');
const { authUser, registerUser } = require('../controllers/userController');
const router = express.Router();

router.post('/login', authUser);
router.route('/register').post(registerUser);
// router.get('/auth/logout', (req, res, next) => {
//     req.logout((err) => {
//       if (err) {
//         return next(err);
//       }
      
//       // Clear the token cookie on logout
//       res.clearCookie('token');
      
//       res.redirect('/login'); // Redirect to login page after logout
//     });
//   });

module.exports = router;
