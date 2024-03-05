const http = require ('http');
const port = 8080;

function requestHandler(req, res){
    console.log(req.url);

    res.end('Gotch!');

    // Response to server!

}

//One Port can usually run one program at a time.

const server = http.createServer(requestHandler);

server.listen(port, function (err){
    if(err)
    {
        console.log(err);
        return;
    }

    console.log("Server is up and running on port: ", port)
});

// Runnig on http://localhost:8080/

// 127.0.0.1:8080

// https://nodejs.org/api/http.html