const adminModel = require('../model/admin.model')
const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
exports.addAdminPage = (req, res) => {
    res.render('addadmin');
};
exports.viewAdminPage = async (req, res) => {
    admins = await adminModel.find();
    console.log(admins)
    res.render('viewadmin', { admins });
};
exports.addAdmin = async (req, res) => {
    // console.log(req.file);
    admin = req.body

    admin.profilePath = req.file ? `/uploads/${req.file.filename}` : ''
    admin.password = await bcrypt.hash(admin.password, 10);

    // console.log(admin)
    newadmin = await adminModel.create(admin);
    // console.log(newadmin);
    return res.redirect('/')
}
exports.editAdmin = async (req, res) => {
    // console.log(req.params)
    let admin = await adminModel.findOneAndUpdate({"_id": req.params._id}, req.body)
    // task: delete old image if new arrives, add new image, add new path in database
    // console.log(admin)

    return res.render('editadmin', { admin })
}
exports.deleteAdmin = async (req, res) => {
    // console.log(req.params)
    let admin = await adminModel.findOneAndDelete({"_id": req.params._id})
    // task: delete image
    // console.log(admin)
    return res.redirect('/admin/view-admin')
}