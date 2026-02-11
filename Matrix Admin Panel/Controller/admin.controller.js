const adminModel = require('../model/admin.model')
const path = require('path')
const fs = require('fs')
exports.addAdminPage = (req, res) => {
    res.render('addadmin');
};
exports.viewAdminPage = (req, res) => {
    res.render('dashboard');
};
exports.addAdmin = async (req, res) => {
    admin = req.body
    console.log(admin)
    newadmin = await adminModel.create(admin);
    console.log(newadmin);
    return res.redirect('/')
}