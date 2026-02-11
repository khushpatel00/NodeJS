const express = require('express');
const cookieParser = require('cookie-parser')
const path = require('path')
const port = 8173
const app = express();
const connectDataBase = require('./config/dbConnect')

app.set('view engine', 'ejs');

connectDataBase();
app.use(express.urlencoded({}));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/admin', require('./routes/admin.routes'))

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})
