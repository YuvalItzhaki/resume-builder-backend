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

// Update contact information within the Resume model
router.put('/resumes', async (req, res) => {
    const updatedContact = req.body;

    try {
        let resume = await Resume.findOne(); // Adjust the query as necessary

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        // Update the contact information within the resume
        resume.contact = updatedContact;

        await resume.save();

        res.json({ message: 'Contact updated successfully', contact: resume.contact });
    } catch (error) {
        res.status(500).json({ message: 'Error updating contact data', error });
    }
});

module.exports = router;
