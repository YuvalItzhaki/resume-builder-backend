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
    contact: {
      type: String,
      required: true
    },
    tech_skills: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    education: {
      type: Array,
      required: true
    },
    profile: {
      type: String,
      required: true
    },
    experience: {
      type: String,
      required: true
    },
  });
const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
