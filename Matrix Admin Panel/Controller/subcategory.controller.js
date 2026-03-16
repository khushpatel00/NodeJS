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
    return res.redirect('/subcategory/view-subcategory')
}
exports.deleteSubCategory = async (req, res) => {
    console.log(req.params._id);
    let subcategory = await subCategoryModel.findById(req.params._id);    

    if(subcategory.categoryCover) fs.unlinkSync(path.join(__dirname, '..', 'public', subcategory.categoryCover))

    await subCategoryModel.findByIdAndDelete(req.params._id);

    return res.redirect('/subcategory/view-subcategory')
}
exports.editSubCategoryPage = async (req, res) => {
    let subcategory = await subCategoryModel.findOne({ _id: req.params._id}).populate('cid');
    let categories = await categoryModel.find();
    return res.render('editsubcategory', { subcategory, categories })
}
exports.editSubCategory = async (req, res) => {
    console.log(req.body, req.file)
    let newSubCategory = req.body;
    if(req?.file?.filename){ // if there's a new subcategory image
        let oldSubCategory = await subCategoryModel.findOne({_id: req.params._id});
        if(oldSubCategory.categoryCover != ''){ // if there's old subcategory image
            fs.unlinkSync(path.join(__dirname, '..', 'public', oldSubCategory.categoryCover)) // delete old subcategory image
        }
        newSubCategory.categoryCover = `/uploads/category/subcategory/${req.file.filename}`;
    }
    let subcategory = await subCategoryModel.findOneAndUpdate({"_id": req.params._id}, newSubCategory)
    res.redirect('/subcategory/view-subcategory')
}