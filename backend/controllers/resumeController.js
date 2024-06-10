const asyncHandler = require('express-async-handler');
const Resume = require('../models/resumeModel');

const saveResume = asyncHandler(async (req, res) => {
  const { name, email, title, description, ...rest } = req.body;

  const resume = new Resume({
    // user: req.user._id,
    name,
    email,
    title,
    description,
    ...rest
  });

  const createdResume = await resume.save();
  res.status(201).json(createdResume);
});

module.exports = { saveResume };

