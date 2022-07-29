// create a server and handle 2 different requests

// add a listener on port 2345
// handle GET request on '/' route where return your name in plain text in response
// handle GET request on '/about' route and return your name in h2 as HTML page.
// add a error handler at last to handle request made on other than above routes with a status code of 404.

const http = require("http");

const url = require("url");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  let pathname = url.parse(req.url).pathname;
  let method = req.method;
  if (method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is PLain Text");
  } else if (method === "GET" && pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>This is HTML About Page</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>Page not found</h2>");
  }
}

server.listen(2345, () => {
  console.log("Server is listening on port 2345");
});
