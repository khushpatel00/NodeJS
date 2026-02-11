const express = require('express');
const routes = express.Router();
const root = require('../Controller/admin.controller');
const uploads = require('../middleware/movie.multer')


routes.get('/', root.viewAdminPage) // fallback
routes.get('/view-admin', root.viewAdminPage)
routes.get('/add-admin', root.addAdminPage)
routes.post('/add-admin', root.addAdmin)
// routes.get('/change-password', root.homepage)


module.exports = routes