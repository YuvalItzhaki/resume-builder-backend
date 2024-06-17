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
    
    // contact: {
    //   email: {
    //     type: String,
    //     required: true
    //   },
    //   phone: {
    //     type: String,
    //     required: true
    //   },
    //   linkedin: {
    //     type: String,
    //     required: true
    //   },
    //   github: {
    //     type: String,
    //     required: true
    //   }
    // },
    tech_skills: {
      type: [String],
      required: true
    },
    languages: {
      type: [String],
      required: true
    },
    // education: [{
    //   institution: String,
    //   degree: String,
    //   startDate: String,
    //   endDate: String
    // }],
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
