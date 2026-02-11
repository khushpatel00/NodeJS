const adminModel = require('../model/admin.model')
const path = require('path')
const fs = require('fs')
exports.addAdminPage = (req, res) => {
    res.render('addadmin');
};
exports.viewAdminPage = async (req, res) => {
    admins = await adminModel.find();
    console.log(admins)
    res.render('viewadmin', { admins });
};
exports.addAdmin = async (req, res) => {
    admin = req.body
    admin.profilePath = '' // multer setup is unfinished
    console.log(admin)
    newadmin = await adminModel.create(admin);
    console.log(newadmin);
    return res.redirect('/')
}