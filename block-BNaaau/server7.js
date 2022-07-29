//  create a server

// add a listener on port 8000
// set appropriate header for html response using res.setHeader
// return an HTML response(<h3>Welcome to altcampus</h3>)

const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end("<h3>Welcome to altcampus</h3>");
}
server.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
