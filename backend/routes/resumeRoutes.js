const express = require('express');
const router = express.Router();
const { saveResume } = require('../controllers/resumeController');
const Resume = require('../models/resumeModel');

router.post('/resumes', saveResume);
router.get('/resumes', async (req, res) => {
    try {
      const resume = await Resume.findOne(); // Adjust the query as necessary
      res.json(resume);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching resume data' });
    }
  });

module.exports = router;
