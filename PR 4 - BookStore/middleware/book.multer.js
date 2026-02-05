const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // without public, error: `Error: ENOENT: no such file or directory, open '/mnt/data/Code/NODE/PR 4 - BookStore/uploads/cover1770185046734.jpg'`
        cb(null, path.join(__dirname, '../public/uploads/'))
    }, 
    filename: (req, file, cb) => {
        cb(null, `cover_${req.body.title}${Date.now()}${path.extname(file.originalname)}`)
    }
})
module.exports = multer({storage})