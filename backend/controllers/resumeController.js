// backend/controllers/resumeController.js
const asyncHandler = require('express-async-handler');
const Resume = require('../models/resumeModel');

// @desc    Get all resumes
// @route   GET /api/resumes
// @access  Public
const getResumes = asyncHandler(async (req, res) => {
  const resumes = await Resume.find({});
  res.json(resumes);
});

// @desc    Create a resume
// @route   POST /api/resumes
// @access  Public
const createResume = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  
  const resume = new Resume({
    title,
    description,
  });
  
  const createdResume = await resume.save();
  res.status(201).json(createdResume);
});

module.exports = {
  getResumes,
  createResume,
};
