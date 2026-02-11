const express = require('express');
const routes = express.Router();
const root = require('../Controller/index.controller');
const uploads = require('../middleware/movie.multer')

routes.get('/', root.homepage)
routes.post('/addMovie', uploads.single('coverImage') ,root.addMovie) 
routes.post('/deleteMovie', root.deleteMovie) 
routes.get('/editMovie', root.editMovie)
routes.post('/editMovie', uploads.single('coverImage') ,root.editMoviePost)
routes.post('/search', root.search)

module.exports = routes