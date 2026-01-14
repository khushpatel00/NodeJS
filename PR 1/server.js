const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url)
    filepath = './index.html'
    switch (req.url) {
        case '/':
            filepath = './index.html'
            break;
        case '/index':
            filepath = './index.html'
            break;
        case '/about':
            filepath = './about.html'
            break;
        default:
            filepath = './404.html'
        break;
    }
    // res.end('this is a home page');

    fs.readFile(filepath, 'utf-8', (err, content) => {
        if (err) {
            console.log(err);
            res.end(err, '\n\n If the error Persists, Contact <a href="https://github.com/khushpatel00">developer</a>')
        }
        else{
            res.end(content);
        }
    })

});


server.listen(8000, () => {
    console.log('server started at http://localhost:8000');
})