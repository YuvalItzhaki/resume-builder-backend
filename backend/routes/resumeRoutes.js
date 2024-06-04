// backend/routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const { getResumes, createResume } = require('../controllers/resumeController');

router.route('/').get(getResumes).post(createResume);

module.exports = router;
