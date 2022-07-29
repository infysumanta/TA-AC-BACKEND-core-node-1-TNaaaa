const http = require("http");

const server = http.createServer(handleRequest);

let handleRequest = (req, res) => {
  console.log(req.headers);
  console.log(req.method, req.url);
  res.end();
};

server.listen(3000, "localhost", () => {
  console.log("Server is Running on port 3000");
});
