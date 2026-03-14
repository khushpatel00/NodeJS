const express = require('express');
const routes = express.Router();
const root = require('../Controller/extracategory.controller');
const uploads = require('../middleware/extracategory.multer')
const passport = require("../Controller/localStrategy");

routes.get('/view-extracategory', passport.checkAuthenticate, root.viewextraCategoryPage)
routes.get('/add-extracategory', passport.checkAuthenticate, root.addextraCategoryPage)
routes.post('/add-extracategory', uploads.single('categoryImage'), root.addextraCategory)

// routes.get('/update-extracategory', passport.checkAuthenticate, root.updateCategoryPage)
// routes.get('/delete-extracategory', passport.checkAuthenticate, root.deleteCategoryPage)


module.exports = routes;