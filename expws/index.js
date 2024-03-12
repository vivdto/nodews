// Importing necessary modules
const express = require('express'); // Express framework for Node.js web applications
const path = require('path'); // Module for working with file and directory paths

// Setting up the port number for the server
const port = 6999;

// Creating an Express application
const app = express();

// Setting the view engine to EJS (Embedded JavaScript)
app.set('view engine', 'ejs');

// Setting the directory for views
app.set('views', path.join(__dirname, 'views'));

// Handling GET request to the root URL '/'
app.get('/', function(req, res){
    // Rendering the 'home' view using EJS template engine
    return res.render('home', { title: "Hey!" });
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us Play with ejs"

    });
});

// Starting the server on the specified port
app.listen(port, function(err){
    // Checking for errors while starting the server
    if(err) {
        console.log('Error in running the server', err);
    }
    // Logging a message indicating the server is running
    console.log('Yup! My Express Server is Running on PORT:', port);
});
