const express = require('express');
const router = express.Router();
const { saveResume } = require('../controllers/resumeController');
const Resume = require('../models/resumeModel');

router.post('/resumes', saveResume);

router.get('/resumes', async (req, res) => {
    try {
        const resume = await Resume.find();
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resume data' });
    }
});

router.get('/resumes/:id', async (req, res) => {
    try {
        const resume = await Resume.find({_id: req.params.id});
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resume data' });
    }
});

router.delete('/resumes/:id', async (req, res) => {
    try {
        const resume = await Resume.findByIdAndDelete({_id: req.params.id});
        console.log('Deleting resume id:  ', req.params.id)
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: 'Error fetchinggg resume data' });
    }
});

router.put('/resumes', async (req, res) => {
    const updatedContact = req.body;

    try {
        let resume = await Resume.findOne(); // Adjust the query as necessary

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        resume.contact = updatedContact;
        await resume.save();

        res.json({ message: 'Contact updated successfully', contact: resume.contact });
    } catch (error) {
        res.status(500).json({ message: 'Error updating contact data', error });
    }
});

router.put('/resumes/:id', async (req, res) => {
    try {
        const updatedResume = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body, // the updated data from the client
            { new: true, runValidators: true } // options to return the updated document and run validators
        );

        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.json(updatedResume);
    } catch (error) {
        res.status(500).json({ message: 'Error updating resume data', error });
    }
});

module.exports = router;
