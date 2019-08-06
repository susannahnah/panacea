
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const searchRouter = require('./routes/search.router');
const cityRouter = require('./routes/city.router');
const countryRouter = require('./routes/country.router');
const orgRouter = require('./routes/org.router');
const medicationRouter = require('./routes/medication.router');
const publicRouter = require('./routes/public.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/search', searchRouter);
app.use('/api/cities', cityRouter);
app.use('/api/countries', countryRouter);
app.use('/api/organizations', orgRouter);
app.use('/api/medications', medicationRouter);
app.use('/api/public', publicRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
