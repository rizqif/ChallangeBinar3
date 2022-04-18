const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const User = require('../controllers/user.js');
const user = new User();

const api = express.Router();

api.use(jsonParser);

api.get('/user', user.getUser);
api.post('/user', jsonParser, user.insertUser);
api.put('/user/:index', jsonParser, user.updateUser);
api.delete('/user/:index', user.deleteUser);

module.exports = api;
