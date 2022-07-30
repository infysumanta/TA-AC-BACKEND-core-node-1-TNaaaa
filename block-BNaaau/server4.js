// write code to create a node server

// add listener on port 5566
// console request url and request method
// return a text response with requested url and method

const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  console.log(req.url, req.method);
  res.end(req.url + " " + req.method);
}

server.listen(5566, () => {
  console.log("Server is listening on port 5566");
});
