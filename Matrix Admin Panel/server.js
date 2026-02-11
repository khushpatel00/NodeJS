const express = require('express');
const path = require('path')
const port = 8173
const app = express();
const connectDataBase = require('./config/dbConnect')

app.set('view engine', 'ejs')

connectDataBase();
app.use(express.urlencoded({}));
app.use(express.json());
app.use(express.static('public'))

app.use('/', require('./routes/index.routes'))

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
