const http = require('http');
const port = 8080;

const fs = require('fs');

function requestHandler(req, res) {
    console.log(req.url);

    res.writeHead(200, { 'content-type': 'text/html' });

    fs.readFile('./index.html', function(err, data) {
        if (err) {
            console.log('error', err);
            //res.end('Error loading the file'); 
            //return;
        }
        res.end(data); 
        //  after reading the file using fs.readFile, you're not sending any response back to the client. You need to include res.end(data) or similar inside the fs.readFile callback to send the file contents back as the respons
    });
}

const server = http.createServer(requestHandler);

server.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server is up and running on port: ", port)
});
