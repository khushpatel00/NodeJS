const express = require('express');
const routes = express.Router();
const root = require('../Controller/index.controller');
const uploads = require('../middleware/book.multer')

routes.get('/', root.homepage)
routes.post('/addBook', uploads.single('coverImage') ,root.addBook) 

module.exports = routes