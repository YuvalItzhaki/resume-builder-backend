const express = require('express');
const router = express.Router();
const Resume = require('../models/resumeModel');

router.get('/resumes', async (req, res) => {
  try {
    const resume = await Resume.findOne({ /* criteria to find the resume */ });
    res.json(resume.tech_skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/resumes/tech_skills', async (req, res) => {
  try {
    const { tech_skills } = req.body;
    if (!Array.isArray(tech_skills)) {
      throw new Error('tech_skills should be an array');
    }
    const resume = await Resume.findOneAndUpdate(
      { /* criteria to find the resume */ },
      { tech_skills },
      { new: true }
    );
    res.json(resume.tech_skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
