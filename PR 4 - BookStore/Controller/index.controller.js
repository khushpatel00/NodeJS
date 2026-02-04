const bookModel = require('../model/book.model')
const path = require('path')
const fs = require('fs')
exports.homepage = async (req, res) => {
    let book = await bookModel.find();
    // console.log(book)
    res.render('index', { book });
};

exports.addBook = async (req, res) => {
    let imagePath = '';

    // console.log(req.body);
    // console.log(req.file);
    // let imagePath = `uploads/${req.file.filename}${path.extname(req.file.path)}`;
    if (req?.file?.filename) imagePath = `/uploads/${req.file.filename}`;
    // console.log(imagePath);
    try {
        let bookObj = { ...req.body }
        bookObj.imagePath = imagePath;
        // console.log(bookObj)
        if (bookObj.title != '' && bookObj.discription != '' && bookObj.price != '') {
            let book = await bookModel.create(bookObj);
            console.log('data inserted into database, ', book)
        };
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}
exports.deleteBook = async (req, res) => {
    console.log(req.query.id)
    let book = await bookModel.findById(req.query.id);
    fs.unlinkSync(path.join(__dirname, '..', 'public', book.imagePath))
    let response = await bookModel.findByIdAndDelete(req.query.id)
    res.redirect('/')
}
exports.editBook = async (req, res) => {
    let book = await bookModel.findById(req.query.id);
    // console.log(book)
    res.render('edit', { book })
};
exports.editBookPost = async (req, res) => {
    // console.log('edited data', req.body, req.query.id)
    let oldBook = await bookModel.findById(req.query.id);
    let imagePath = oldBook.imagePath;
    let bookObj = {...req.body};
    // console.log('old data: ',oldBook)
    if (req.file) {
        fs.unlinkSync(path.join(__dirname, '..', 'public', oldBook.imagePath))
        imagePath = `/uploads/${req.file.filename}`;
        bookObj.imagePath = imagePath
    }
    let book = await bookModel.findByIdAndUpdate(req.query.id, {
        bookObj
    });
    // bookModel.findByIdAndUpdate(req.query.id)
};