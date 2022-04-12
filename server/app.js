const express = require('express');
const app = express(); // a framework of nodejs
const morgan = require('morgan'); // to log api requests
const cors = require('cors'); // for req and res bw two different ports
const bodyParser = require('body-parser');
const checkAuth = require('./middlewares/auth');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //A middleware extracts the entire body portion of an incoming request stream and exposes it on req.body.

// Routes
// app.use('/', require('./routes/home'));
app.use('/signup', require('./routes/signup'));
app.use('/signin', require('./routes/signin'));
// app.use('/sponsers', require('./routes/sponsers'));
app.use('/event/add', checkAuth, require('./routes/addevent'));



module.exports = app;