const mongoose = require('mongoose');

const extraCategorySchema = mongoose.Schema({
    scid: mongoose.Schema.Types.ObjectId, // subcategory id
    ecname: String, // extracategory name
    extraCategoryCover: String,  
})

module.exports = mongoose.model('extracategory', extraCategorySchema);