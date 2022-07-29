const http = require("http");
const url = require("url");

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parseUrl = url.parse(req.url, true);
  let pathname = parseUrl.pathname;

  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to homepage");
  } else if (req.method === "GET" && pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && pathname === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "this is a post request" }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
}

server.listen(3000, () => {
  console.log("Server listening on Port 3000");
});
