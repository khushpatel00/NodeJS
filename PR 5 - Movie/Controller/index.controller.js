const movieModel = require('../model/movie.model')
const path = require('path')
const fs = require('fs')
exports.homepage = async (req, res) => {
    let movie = await movieModel.find();
    // console.log(movie)
    res.render('index', { movie });
};

exports.addMovie = async (req, res) => {
    let imagePath = '';

    // console.log(req.body);
    // console.log(req.file);
    // let imagePath = `uploads/${req.file.filename}${path.extname(req.file.path)}`;
    if (req?.file?.filename) imagePath = `/uploads/${req.file.filename}`;
    // console.log(imagePath);
    try {
        let movieObj = { ...req.body }
        movieObj.imagePath = imagePath;
        // console.log(movieObj)
        if (movieObj.title != '' && movieObj.discription != '' && movieObj.price != '') {
            let movie = await movieModel.create(movieObj);
            // console.log('data inserted into database, ', movie)
        };
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}
exports.deleteMovie = async (req, res) => {
    console.log(req.query.id)
    let movie = await movieModel.findById(req.query.id);
    if(movie.imagePath) fs.unlinkSync(path.join(__dirname, '..', 'public', movie.imagePath))
    let response = await movieModel.findByIdAndDelete(req.query.id)
    res.redirect('/')
}
exports.editMovie = async (req, res) => {
    let movie = await movieModel.findById(req.query.id);
    // console.log(movie)
    res.render('edit', { movie })
};
exports.editMoviePost = async (req, res) => {
    // console.log('edited data', req.body, req.query.id)
    let oldmovie = await movieModel.findById(req.query.id);
    let imagePath = oldmovie.imagePath;
    let movieObj = { ...req.body };
    // console.log('old data: ',oldmovie)
    if (req.file) {
        fs.unlinkSync(path.join(__dirname, '..', 'public', oldmovie.imagePath))
        imagePath = `/uploads/${req.file.filename}`;
    }
    movieObj.imagePath = imagePath
    console.log(movieObj)
    let movie = await movieModel.findByIdAndUpdate(req.query.id, movieObj);
    // movieModel.findByIdAndUpdate(req.query.id)
    res.redirect('/')
};
exports.search = async (req, res) => {
    // let searchQuery = req.body.search
    const searchQuery = String(req.body.search || '').trim();
    console.log(searchQuery);
    let movie = await movieModel.find({
        $or: [
            { title: { $regex: searchQuery, $options: 'i' } },
            { discription: { $regex: searchQuery, $options: 'i' } },
            { author: { $regex: searchQuery, $options: 'i' } },
            { genre: { $regex: searchQuery, $options: 'i' } },
        ]
    })
    console.log(movie)
    console.log(Object.keys(movieModel.schema.paths));

    res.render('index', { movie })
}