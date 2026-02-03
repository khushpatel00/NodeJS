const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    discription: String,
    price: Number,
    author: String,
    genre: String,
    imagePath: String,
})

module.exports = mongoose.model('book', bookSchema);