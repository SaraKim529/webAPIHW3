 // Require http and express application
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

// Use app.use to match HTTP requests

    // if else checks it only accepts GET request
    app.use('/assignment3', function(request, response) {
        if(request.method == 'GET') {
                response.send(request.query);
        }
        // If request is not GET for /gets, reject
        else {
            response.send('Request rejected! Request only supports GET');
        }
    });
