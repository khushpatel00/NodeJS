const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    discription: String,
    rating: Number,
    author: String,
    genre: String,
    imagePath: String,
})

module.exports = mongoose.model('movie', movieSchema);