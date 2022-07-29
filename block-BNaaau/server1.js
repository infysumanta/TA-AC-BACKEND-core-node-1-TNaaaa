// Create a basic server using http's createServer

// listen for request on port 5000
// console request and response object
// do a request using browser on localhost:5000
// check out console for request and response object
const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  console.log(req, res);
}

server.listen(5000, "localhost", () => {
  console.log("Server is listening on port 5000");
});
