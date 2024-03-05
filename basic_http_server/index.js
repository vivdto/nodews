const http = require ('http');
const port = 8080;

//One Port can usually run one program at a time.

const server = http.createServer();

server.listen(port, function (err){
    if(err)
    {
        console.log(err);
        return;
    }

    console.log("Server is up and running on port: ", port)
});

// Runnig on http://localhost:8080/

// https://nodejs.org/api/http.html