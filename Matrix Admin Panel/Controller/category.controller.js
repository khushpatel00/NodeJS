const categoryModel = require('../model/category.model')
const path = require('path')
const fs = require('fs')

exports.viewCategoryPage = async (req, res) => {
    categories = await categoryModel.find();
    // console.log(categories)
    res.render('viewcategory', { categories })
}
exports.addCategoryPage = async (req, res) => {
    res.render('addcategory')
}
exports.addCategory = async (req, res) => {
    console.log(req.body);
    category = req.body

    category.categoryCover = req.file ? `/uploads/category/${req.file.filename}` : ''

    newcategory = await categoryModel.create(category);
    return res.redirect('/category/view-category')
}