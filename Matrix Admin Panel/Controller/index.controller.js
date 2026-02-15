const adminModel = require('../model/admin.model')
const blogModel = require('../model/blog.model')
const path = require('path')
const fs = require('fs')
const bcrypt = require("bcrypt");
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
exports.blog = async (req, res) => {
    let blog = await blogModel.find();
    return res.render('blog', { blog });
}
exports.addBlog = async (req, res) => {
        // console.log(req.file);
    let blog = req.body

    blog.coverImage = req.file ? `/uploads/blog/${req.file.filename}` : ''
    console.log(blog)
    let newblog = await blogModel.create(blog);
    console.log(newblog);
    return res.redirect('/blog')
}
exports.deleteBlog = async (req, res) => {
    console.log(req.params._id)
    let oldBlog = await blogModel.findOne({_id: req.params._id})
    fs.unlinkSync(path.join(__dirname, '..', 'public', oldBlog.coverImage))
    let blog = await blogModel.findOneAndDelete(req.params._id)
    res.redirect('/blog')
}