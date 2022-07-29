// write code to create a node server

// add listener on port 7000
// also add a callback function to listener with a console server listening on port 7000
// return entire request headers in response.

const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  res.end(JSON.stringify(req.headers));
}

server.listen(7000, () => {
  console.log("Server is listening on port 7000");
});
