// backend/models/resumeModel.js
const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
  },
  {
    timestamps: false,
  }
);

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
