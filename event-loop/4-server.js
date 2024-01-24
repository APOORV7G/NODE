const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received:', req.url);
    res.end('Hello world! How are you doing?');
});

server.listen(60002, () => {
    console.log('Server listening on port 60002');// this means keep listening 
    // cause this is asynchronous 
});