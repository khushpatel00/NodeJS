const categoryModel = require('../model/extracategory.model')
const path = require('path')
const fs = require('fs')

exports.viewextraCategoryPage = async (req, res) => {
    categories = await categoryModel.find();
    // console.log(categories)
    res.render('viewcategory', { categories })
}
exports.addextraCategoryPage = async (req, res) => {
    res.render('addcategory')
}
exports.addextraCategory = async (req, res) => {
    console.log(req.body);
    category = req.body

    category.categoryCover = req.file ? `/uploads/category/${req.file.filename}` : ''

    newcategory = await categoryModel.create(category);
    return res.redirect('/category/view-category')
}