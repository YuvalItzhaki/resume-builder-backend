const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  });
const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
