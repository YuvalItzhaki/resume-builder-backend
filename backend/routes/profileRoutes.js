const express = require('express');
const router = express.Router();
const Resume = require('../models/resumeModel');

router.get('/resumes', async (req, res) => {
    try {
        const resume = await Resume.findOne();
        res.json(resume.profile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile data', error });
    }
});

router.put('/resumes/profile', async (req, res) => {
    const updatedProfile = req.body;

    try {
        let resume = await Resume.findOne(); // Adjust the query as necessary

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        // Update the education information within the resume
        resume.profile = updatedProfile;

        await resume.save();

        res.json({ message: 'Profile updated successfully', profile: resume.profile });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile data', error });
    }
});

module.exports = router;
