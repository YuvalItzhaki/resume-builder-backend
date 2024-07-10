const asyncHandler = require('express-async-handler');
const Resume = require('../models/resumeModel');

const saveResume = async (req, res) => {
  try {
    const { _id, ...resumeData } = req.body;
    const resume = new Resume({
      ...resumeData,
      userId: req.body.userId // Ensure userId is taken from the request body
    });
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Error saving resume', error });
  }
};


const getResumeById = asyncHandler(async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    console.log('Fetching resume with ID:', req.params.id);

    if (!resume) {
      console.log('Resume not found');
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.json(resume);
  } catch (error) {
    console.error('Error fetching resume:', error);
    res.status(500).json({ message: 'Error fetching resume', error });
  }
});

const getResumesByUserId = asyncHandler(async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.params.userId });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resumes', error });
  }
});

module.exports = { saveResume, getResumeById, getResumesByUserId };

