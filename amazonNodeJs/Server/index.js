const http = require('http');
const port = 8099;
const fs = require('fs');

function requestHandler(req, res) {
    console.log(req.url);

    let filepath;
    switch (req.url) {
        case '/':
            filepath = 'Server/index.html';
            break;
        default:
            filepath = 'Server/404.html';
    }

    fs.readFile(filepath, function(err, data) {
        if (err) {
            console.log('error', err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Error 404: Not Found</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}

const server = http.createServer(requestHandler);
server.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server is up and running on port: ", port);
});
