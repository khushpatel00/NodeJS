const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    rating: Number,
    language: String,
    genre: String,
    imagePath: String,
})

module.exports = mongoose.model('movie', movieSchema);