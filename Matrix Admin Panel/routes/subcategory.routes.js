const express = require('express');
const routes = express.Router();
const root = require('../Controller/subcategory.controller');
const uploads = require('../middleware/subcategory.multer')
const passport = require("../Controller/localStrategy");

routes.get('/view-subcategory', passport.checkAuthenticate, root.viewSubCategoryPage)
routes.get('/add-subcategory', passport.checkAuthenticate, root.addSubCategoryPage)
routes.post('/add-subcategory', uploads.single('subcategoryImage'), root.addSubCategory)

// routes.get('/update-subcategory', passport.checkAuthenticate, root.updateCategoryPage)
// routes.get('/delete-subcategory', passport.checkAuthenticate, root.deleteCategoryPage)


module.exports = routes;