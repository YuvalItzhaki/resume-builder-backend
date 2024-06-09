// backend/routes/resumeRoutes.js
// const express = require('express');
// const router = express.Router();
// const { getResumes, createResume } = require('../controllers/resumeController');

// router.route('/').get(getResumes).post(createResume);

// module.exports = router;
// backend/routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const { saveResume } = require('../controllers/resumeController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, saveResume);

module.exports = router;
