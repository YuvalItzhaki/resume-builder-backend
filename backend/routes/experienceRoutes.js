const express = require('express');
const router = express.Router();
const Resume = require('../models/resumeModel');

router.get('/resumes', async (req, res) => {
    try {
        const resume = await Resume.findOne(); 
        res.json(resume.experience); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching experience data', error });
    }
});

router.put('/resumes/experience', async (req, res) => {
    const updatedExperience = req.body;

    try {
        let resume = await Resume.findOne(); 

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        resume.experience = updatedExperience;

        await resume.save();

        res.json({ message: 'Experience updated successfully', experience: resume.experience });
    } catch (error) {
        res.status(500).json({ message: 'Error updating experience data', error });
    }
});

module.exports = router;
