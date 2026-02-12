const adminModel = require('../model/admin.model')
const path = require('path')
const fs = require('fs')
exports.homepage = async (req, res) => {
    if(req.cookies?.adminauth?._id) return res.render('dashboard');
    return res.redirect('/auth/login');
};
exports.loginPage = (req, res) => {
    res.render('login')
}
exports.authenticate = (req, res) => { // authenticate at dashboard entry
    if(req.cookies?.adminauth?._id) return res.redirect('/dashboard');
    return res.redirect('/auth/login');
}