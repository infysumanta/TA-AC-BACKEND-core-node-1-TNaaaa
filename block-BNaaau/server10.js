//  create a server

// add listener on port 5050
// use postman to do a POST request on index route
// console to check request method
// send HTML response i.e. <h2>posted for first time</h2>

const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  console.log(req.method);
  res.end("<h2>posted for first time</h2>");
}

server.listen(5050, () => {
  console.log("Server is listening on port 5050");
});
