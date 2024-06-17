const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: String,
  phone: String,
  linkedin: String,
  github: String
});
const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  startDate: String,
  endDate: String
});
const languageSchema = new mongoose.Schema({
  value: String,
  level: String
});
const resumeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    contact: contactSchema,
    education: [educationSchema],
    
    tech_skills: {
      type: [String],
      required: true
    },
    languages: [languageSchema],

    profile: {
      type: String,
      required: true
    },
    experience: [{
      title: String,
      company: String,
      startDate: String,
      endDate: String,
      duties: [String]
    }]
  });
const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
