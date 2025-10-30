// Use the built-in 'http' module
const http = require('http');

// Define the port to listen on (must match your Dockerfile EXPOSE)
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Send a successful HTTP header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body
  res.end('Hello from the Podman Container! - WEBSERVER IS LIVE!');
});

// Start the server and listen for connections
server.listen(port, () => {
  console.log(`Server running and listening on http://localhost:${port}`);
});