const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  let path = url.parse(req.url).pathname;
  let method = req.method;
  if (method === "GET" && path === "/file") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./node.html", "utf8", (err, data) => {
      res.write(data);
      res.end();
    });
  } else if (method === "GET" && path === "/stream") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./node.html").pipe(res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
}

server.listen(5555, () => {
  console.log("Server is running on port 5555");
});
