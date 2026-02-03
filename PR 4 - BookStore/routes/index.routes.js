const express = require('express');
const routes = express.Router();
const { homepage } = require('.')

routes.get('/', homepage)