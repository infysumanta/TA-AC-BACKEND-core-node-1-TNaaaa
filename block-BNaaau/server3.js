// write code to create a node server

// add listener on port 5555
// console request headers
// respond with content of user-agent from request headers.

const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  console.log(req.headers);
  res.end(req.headers["user-agent"]);
}

server.listen(5555, () => {
  console.log("Server is listening on port 5555");
});
