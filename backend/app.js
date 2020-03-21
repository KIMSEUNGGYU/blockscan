require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');

const { corsProcess } = require('./services/cors');
const indexRouter = require('./router/index');
const blocksRouter = require('./router/blocks');
const blockRouter = require('./router/block');

const app = express();

const BASE_API = '/api/v1';
// app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', corsProcess);
app.use(`${BASE_API}/`, indexRouter);
app.use(`${BASE_API}/blocks`, blocksRouter);
app.use(`${BASE_API}/block`, blockRouter);

module.exports = app;
