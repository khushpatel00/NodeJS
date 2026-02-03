const mongoose = require('mongoose');
const dbConnect = ()=>{
    mongoose.connect("mongodb+srv://khushpatel00:atlasadmin@cluster0.ixqbyv9.mongodb.net/")
    .then(()=> console.log('Database Connected'))
    .catch((error)=> console.log(error))
} 
module.exports = dbConnect;