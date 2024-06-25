const asyncHandler = require('express-async-handler');
const Resume = require('../models/resumeModel');

const saveResume = asyncHandler(async (req, res) => {
  const { name, title, summary, contact, tech_skills, languages, education, profile, experience } = req.body;

  const resume = new Resume({
    summary,
    name,
    title,
    contact,
    tech_skills,
    languages,
    education,
    profile,
    experience,
  });

  const createdResume = await resume.save();
  res.status(201).json(createdResume);
});
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

module.exports = { saveResume, getResumeById };

