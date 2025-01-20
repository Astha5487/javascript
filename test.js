// Import the HTTP module
const http = require('http');

// Define the server port and host
const PORT = 3000;
const HOST = 'localhost';

// Create the server
const server = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Handle different routes
    if (req.url === '/' && req.method === 'GET') {
        res.end('Welcome to the Home Page!');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.end('About Page: This is a simple Node.js server.');
    } else {
        // Handle 404 errors
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page Not Found');
    }
});

// Start the server
server.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
