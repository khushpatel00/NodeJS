const express = require('express');
const routes = express.Router();
const root = require('../Controller/index.controller');
const uploads = require('../middleware/admin.multer')

routes.get('/', root.authenticate)
routes.get('/dashboard', root.homepage)


module.exports = routes