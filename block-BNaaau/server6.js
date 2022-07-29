// create a server

// add a listener on port 3333
// set status code 202 in response using res.statusCode.

const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  res.statusCode = 202;
  res.end("My first server in NodeJS");
}
server.listen(3333, () => {
  console.log("Server is listening on port 3333");
});
