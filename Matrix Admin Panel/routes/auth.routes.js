const express = require('express');
const routes = express.Router();
const root = require('../Controller/auth.controller');
const uploads = require('../middleware/admin.multer')


routes.get('/', root.loginPage) // fallback
routes.get('/login', root.loginPage)
routes.post('/login', root.authenticate)
routes.get('/logout', root.logout)
// routes.get('/change-password', root.homepage)


module.exports = routes