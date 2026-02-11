const express = require('express');
const routes = express.Router();
const root = require('../Controller/index.controller');
const uploads = require('../middleware/movie.multer')

routes.get('/', root.homepage)

module.exports = routes