const express = require('express');
const port = 8173
const app = express();
const connectDB = require('./config/dbConnect')

app.set('view engine', 'ejs')

connectDB();
app.use(express.urlencoded({}));
// app.use(express.json());

app.use('/', require('./routes/index.routes'))

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})