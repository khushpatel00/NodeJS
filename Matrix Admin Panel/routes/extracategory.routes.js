const express = require('express');
const routes = express.Router();
const root = require('../Controller/extracategory.controller');
const uploads = require('../middleware/extracategory.multer')
const passport = require("../Controller/localStrategy");

routes.get('/view-extracategory', passport.checkAuthenticate, root.viewextraCategoryPage)
routes.get('/add-extracategory', passport.checkAuthenticate, root.addextraCategoryPage)
routes.post('/add-extracategory', uploads.single('categoryImage'), root.addextraCategory)
routes.get('/edit-extracategory/:_id', passport.checkAuthenticate, root.editextraCategoryPage)
routes.post('/edit-extracategory/:_id', uploads.single('categoryImage'), root.editextraCategory)
routes.get('/delete-extracategory/:_id', passport.checkAuthenticate, root.deleteextraCategory)


module.exports = routes;