require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');

const indexRouter = require('./controllers/index');

const app = express();

const BASE_API = '/api/v1';
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`${BASE_API}/`, indexRouter);

module.exports = app;
