// create a node server

// add listener on port 5100
// respond with 'My first server in NodeJS' using response object

const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  res.end("My first server in NodeJS");
}
server.listen(5100, () => {
  console.log("Server is listening on port 5100");
});
