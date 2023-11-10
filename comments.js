// Create web server
// 1. Create a web server
// 2. Handle GET request to /comments
// 3. Handle POST request to /comments
// 4. Create a web socket server
// 5. Handle web socket connection
// 6. Handle web socket message
// 7. Start the web server

// 1. Create a web server
// 1.1 Import http module
// 1.2 Create a web server
// 1.3 Start the web server
// 1.4 Log that the web server has started

// 1.1 Import http module
const http = require('http');

// 1.2 Create a web server
const server = http.createServer();

// 1.3 Start the web server
server.listen(3000);

// 1.4 Log that the web server has started
console.log('Web server started');

// 2. Handle GET request to /comments
// 2.1 Import fs module
// 2.2 Listen for request events on the web server
// 2.3 Handle the request
// 2.4 Read the comments.json file
// 2.5 Set the response header
// 2.6 Set the response content
// 2.7 Send the response
// 2.8 Log that the request has been handled

// 2.1 Import fs module
const fs = require('fs');

// 2.2 Listen for request events on the web server
server.on('request', (request, response) => {

    // 2.3 Handle the request
    if (request.method === 'GET' && request.url === '/comments') {

        // 2.4 Read the comments.json file
        fs.readFile('./comments.json', 'utf-8', (error, data) => {

            // 2.5 Set the response header
            response.setHeader('Content-Type', 'application/json');

            // 2.6 Set the response content
            response.write(data);

            // 2.7 Send the response
            response.end();

            // 2.8 Log that the request has been handled
            console.log('GET request handled');

        });

    }

});

// 3. Handle POST request to /comments
// 3.1 Import fs module
// 3.2 Listen for request events on the web server
// 3