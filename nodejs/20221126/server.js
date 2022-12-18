const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
let home = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')
let about = fs.readFileSync(path.join(__dirname, 'about.html'), 'utf-8')

const server = http.createServer((req, res) => {
    if(req.url == '/' || req.url == '/index') {
        res.write(home);
    }
    if(req.url == '/about') {
        res.write(about);
    }
  res.statusCode = 200;
  res.message = req.url;
//   res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});