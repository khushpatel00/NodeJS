const adminModel = require('../model/admin.model')
const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const blogModel = require("../model/blog.model");
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
exports.editAdminPage = async (req, res) => {
    let admin = await adminModel.findOne({ _id: req.params._id})
    return res.render('editadmin', { admin })
}
exports.editAdmin = async (req, res) => {
    console.log(req.body, req.file)
    let newAdmin = req.body;
    // console.log(req.params)
    // task: delete old image if new arrives, add new image, add new path in database
    // console.log(admin)
    if(req?.file?.filename){ // if there's a new profile image
        console.log(req.params._id)
        let oldAdmin = await adminModel.findOne({_id: req.params._id});
        console.log(oldAdmin)
        if(oldAdmin.profilePath != ''){ // if there's old profile image
            fs.unlinkSync(path.join(__dirname, '..', 'public', oldAdmin.profilePath)) // delete old profile image
        }
        newAdmin.profilePath = `/uploads/${req.file.filename}`;
    }
    let admin = await adminModel.findOneAndUpdate({"_id": req.params._id}, newAdmin)
    res.redirect('/admin/view-admin')
}

exports.deleteAdmin = async (req, res) => {
    // console.log(req.params)
    let oldAdmin = await adminModel.findOne({_id: req.params._id})
    if(oldAdmin.profilePath != '') fs.unlinkSync(path.join(__dirname, '..', 'public', oldAdmin.profilePath))

    let admin = await adminModel.findOneAndDelete({"_id": req.params._id})
    // console.log(admin)
    return res.redirect('/admin/view-admin')
}