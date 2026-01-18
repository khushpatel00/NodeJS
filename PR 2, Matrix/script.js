const express = require('express');
const app = express();
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index')
})

// for this all links are named exactly as file name, to reducxe code
app.get('/:pagename', (req, res)=>{
    res.render(req.params.pagename);
})

app.listen(8000, ()=>{
    console.log('Server started at port http://localhost:8000')
})