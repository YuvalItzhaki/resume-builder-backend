const asyncHandler = require('express-async-handler');
const Resume = require('../models/resumeModel');

const saveResume = asyncHandler(async (req, res) => {
  const { name, email, title, contact, tech_skills, languages, education, profile, experience, } = req.body;

  const resume = new Resume({
    name,
    email,
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

module.exports = { saveResume };

