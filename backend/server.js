const express = require('express');
const db = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');

const cookieParser = require('cookie-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const cors = require('cors');
const fileUpload = require('express-fileupload');
const serializeUser = require('./routes/serealize.js');
const deserializeUser = require('./routes/deserialize.js');
const afterGoogleAth = require('././routes/goggleStrategy');

const app = express();
const User = require('./models/User');
const apiRouter = require('./routes/api');

app.use(
  fileUpload({
    createParentPath: true,
  }),
);

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(
  session({
    secret: 'Insert randomized text here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 86400000,
    },
  }),
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
passport.use(
  new GoogleStrategy(
    // {
    //   clientID: '283536601534-4rfndb0gn8dbp9f45a0d6vjo79ra1325.apps.googleusercontent.com',
    //   clientSecret: 'zNgtA9WUqqOaiUyNJN8Eg31I',
    //   callbackURL: 'http://localhost:3000/auth/google/callback',
    //   realm: 'http://localhost:3000',
    //   scope: ['profile'],
    // },
    {
      clientID: '557330626841-2el0lme6gfshj09l4q2le8hpso0947qc.apps.googleusercontent.com',
      clientSecret: 'EwayybnyGK58HL9AnutS3Dn8',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      realm: 'http://localhost:3000',

      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate(profile, accessToken, refreshToken, (err, user) => done(err, user));
    },
  ),
);

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('http://localhost:8080');
});
passport.serializeUser(serializeUser);

// used to deserialize the user
passport.deserializeUser(deserializeUser);
db.connect('mongodb+srv://root:z1qx2wc3e@cluster0-ser1y.mongodb.net/nomadapp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});
app.use('/api', apiRouter);
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
