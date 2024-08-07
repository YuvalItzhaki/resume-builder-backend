const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../models/userModel');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5001/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }
        // If user does not exist, create a new user
        user = new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          // Add any additional fields here
        });
        await user.save();
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  ), 
);
passport.use(
  new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: "http://localhost:5001/api/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_liteprofile'],
  state: true
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ linkedinId: profile.id });
    if (!user) {
      user = await User.create({
        linkedinId: profile.id,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        profilePicture: profile.photos[0].value
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
