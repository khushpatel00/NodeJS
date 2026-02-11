const movieModel = require('../model/movie.model')
const path = require('path')
const fs = require('fs')
exports.homepage = async (req, res) => {    
    res.render('index');
};
