const express = require('express');
const router = express.Router();
const Resume = require('../models/resumeModel');

// GET education information from the resume
router.get('/resumes', async (req, res) => {
    try {
        const resume = await Resume.findOne(); // Adjust the query as necessary
        res.json(resume.education); // Assuming education is stored as an array in your Resume model
    } catch (error) {
        res.status(500).json({ message: 'Error fetching education data', error });
    }
});

// Update education information within the Resume model
router.put('/resumes/education', async (req, res) => {
    const updatedEducation = req.body;

    try {
        let resume = await Resume.findOne(); // Adjust the query as necessary

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        // Update the education information within the resume
        resume.education = updatedEducation;

        await resume.save();

        res.json({ message: 'Education updated successfully', education: resume.education });
    } catch (error) {
        res.status(500).json({ message: 'Error updating education data', error });
    }
});

module.exports = router;
