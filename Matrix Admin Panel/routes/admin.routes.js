const express = require('express');
const routes = express.Router();
const root = require('../Controller/admin.controller');
const uploads = require('../middleware/admin.multer')


routes.get('/', root.viewAdminPage) // fallback
routes.get('/view-admin', root.viewAdminPage)
routes.get('/add-admin', root.addAdminPage)
routes.post('/add-admin', uploads.single('profileImage'), root.addAdmin)
routes.get('/edit-admin/:_id', root.editAdmin)
routes.get('/delete-admin/:_id', root.deleteAdmin)
// routes.get('/change-password', root.homepage)


module.exports = routes