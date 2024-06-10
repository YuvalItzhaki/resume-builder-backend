const express = require('express');
const passport = require('./config/passportConfig');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
const cors = require('cors');
const resumeRouter = require('./routes/resumeRoutes');



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
    secret: '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',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', resumeRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
