const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    contactno: String,
    profilePath: String,
})

module.exports = mongoose.model('admin', adminSchema);