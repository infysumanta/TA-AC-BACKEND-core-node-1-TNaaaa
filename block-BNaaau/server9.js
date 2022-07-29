// create a basic node server

// add a listener at port 8888
// add appropriate header for json response
// send json response({success: true, message: 'Welcome to Nodejs'})

const http = require("http");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ success: true, message: "Welcome to Nodejs" }));
}

server.listen(8888, () => {
  console.log("Server is listening on port 8888");
});
