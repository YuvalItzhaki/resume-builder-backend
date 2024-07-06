require('dotenv').config();
const express = require('express');
const passport = require('./config/passportConfig');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
const cors = require('cors');
const resumeRouter = require('./routes/resumeRoutes');
const educationRoutes = require('./routes/educationRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const languagesRoutes = require('./routes/languagesRoutes');
const profileRoutes = require('./routes/profileRoutes');
const summaryRoutes = require('./routes/summaryRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api', resumeRouter, educationRoutes, skillsRoutes, languagesRoutes, profileRoutes, summaryRoutes, experienceRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
