const express = require('express');
const router = express.Router();
const Resume = require('../models/resumeModel');

router.get('/resumes', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json({ profile: resume.profile });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile data', error });
  }
});

router.put('/resumes/profile', async (req, res) => {
  const { profile } = req.body;

  try {
    let resume = await Resume.findOne();

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    resume.profile = profile;
    await resume.save();

    res.json({ message: 'Profile updated successfully', profile: resume.profile });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile data', error });
  }
});

module.exports = router;
