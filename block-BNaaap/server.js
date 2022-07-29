const http = require("http");
const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  res.writeHead(201, { "Content-Type": "text/html" });
  res.end("<h1>Welcome</h1>");
}

server.listen(4444, "localhost", () => {
  console.log("Server is Running on port 3000");
});
