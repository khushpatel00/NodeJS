const subCategoryModel = require('../model/subcategory.model')
const categoryModel = require('../model/category.model')
const path = require('path')
const fs = require('fs')

exports.viewSubCategoryPage = async (req, res) => {
    categories = await subCategoryModel.find().populate('cid');
    console.log(categories)
    res.render('viewsubcategory', { categories })
}
exports.addSubCategoryPage = async (req, res) => {
    categories = await categoryModel.find();
    res.render('addsubcategory', { categories });
}
exports.addSubCategory = async (req, res) => {
    console.log(req.body);
    category = req.body

    category.categoryCover = req.file ? `/uploads/category/subcategory/${req.file.filename}` : ''
    
    newcategory = await subCategoryModel.create(category);
    return res.redirect('/category/view-category')
}