const express = require ('express');

const port = 8969;

const app = express();

app.get('/', function(req, res){
    console.log(req);
    res.send('<h1> Cool, it is Running </h1>');
});



app.listen(port, function(err){
    if(err) {console.log('Error in running the server', err)}

    console.log('Yup! My Express Server is Running on PORT:', port);

});