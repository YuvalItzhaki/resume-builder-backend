const express = require('express');
const router = express.Router();
const Resume = require('../models/resumeModel');

// Middleware to parse JSON request bodies
router.use(express.json());

router.get('/resumes', async (req, res) => {
    try {
        const resume = await Resume.findOne();
        res.json(resume ? resume.summary : '');
    } catch (error) {
        res.status(500).json({ message: 'Error fetching summary data', error });
    }
});

router.put('/resumes/summary', async (req, res) => {
    const { summary } = req.body;

    try {
        let resume = await Resume.findOne();

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        resume.summary = summary;
        await resume.save();

        res.json({ message: 'Summary updated successfully', summary: resume.summary });
    } catch (error) {
        res.status(500).json({ message: 'Error updating summary data', error });
    }
});

module.exports = router;
