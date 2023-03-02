const bodyParser = require('body-parser');
const express = require('express');
const { getAccountByIdLazy } = require('./accounts.controller');
const { getCommentsByAccountId } = require('./comments.controller');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { getAccountById, getAccountByIdLazy } = require('./controllers/accountsController');
const { getCommentsByAccountId } =require('../controllers/comments.controller');

app.get('./accounts/:id', getAccountById);
app.get('/accounts-v2/:id', getAccountByIdLazy);
app.get('./accounts/:id/comments', getCommentsByAccountId)

module.exports = app;