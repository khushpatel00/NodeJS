const express = require('express');
const routes = express.Router();
const root = require('../Controller/index.controller')

routes.get('/status', root.status)
routes.get('/health', root.health)


module.exports = routes