const bookModel = require('../model/book.model')

exports.homepage = async (req, res) => {
    let book = await bookModel.find();
    // console.log(book)
    res.render('index', {book});
};

exports.addBook = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    try {
        let bookObj = req.body
        if (bookObj.title != '' && bookObj.discription != '' && bookObj.price != '') {
           // let book = await bookModel.create(req.body);
          // console.log('data inserted into database, ', book)
        };
        res.redirect('/')
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

exports.editBook = (req, res) => {
    res.render('index')
};