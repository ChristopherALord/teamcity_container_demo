// Use the built-in 'http' module
const http = require('http');

// Define the port to listen on (must match your Dockerfile EXPOSE)
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  
  // Send a successful HTTP header
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send the response body with HTML and inline CSS
  res.end(`
    <div style="
      font-family: Arial, sans-serif; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      background-color: #f0f2f5;
    ">
      <h1 style="
        font-size: 3.5rem; 
        color: #007bff; 
        text-align: center;
      ">
        Hello from the Podman Container!
      </h1>
    </div>
  `);
});

// Start the server and listen for connections
server.listen(port, () => {
  console.log(`Server running and listening on http://localhost:${port}`);
});