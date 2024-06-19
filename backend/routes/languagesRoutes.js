// routes/resume.js

const express = require('express');
const router = express.Router();
const Resume = require('../models/resumeModel');

router.get('/resumes', async (req, res) => {
  try {
    const resume = await Resume.findOne({ /* criteria to find the resume */ });
    res.json(resume.languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/resumes/languages', async (req, res) => {
  try {
    const { languages } = req.body; // Expecting an array of strings
    if (!Array.isArray(languages)) {
      throw new Error('languages should be an array');
    }
    const resume = await Resume.findOneAndUpdate(
      { /* criteria to find the resume */ },
      { languages },
      { new: true }
    );
    res.json(resume.languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
