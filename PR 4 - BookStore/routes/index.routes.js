const express = require('express');
const routes = express.Router();
const root = require('../Controller/index.controller');
const uploads = require('../middleware/book.multer')

routes.get('/', root.homepage)
routes.post('/addBook', uploads.single('coverImage') ,root.addBook) 
routes.post('/deleteBook', root.deleteBook) 
routes.get('/editBook', root.editBook)
routes.post('/editBook', uploads.single('coverImage') ,root.editBookPost)
routes.post('/search', root.search)

module.exports = routes