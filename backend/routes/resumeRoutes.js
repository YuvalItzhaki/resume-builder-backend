const express = require('express');
const router = express.Router();
const { saveResume } = require('../controllers/resumeController');
// const { protect } = require('../middleware/authMiddleware');

router.post('/resumes', saveResume);

module.exports = router;
