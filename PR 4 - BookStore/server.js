const express = require('express');
const port = 8173
const app = express();
const connectDB = require('./config/dbConnect')

connectDB();

app.get('/', require('./routes/index.routes'))

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})