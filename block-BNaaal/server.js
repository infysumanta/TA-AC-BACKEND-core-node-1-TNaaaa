const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request:", req);
  console.log(
    "================================================================"
  );
  console.log("Response:", res);
  res.end("Hello World");
});

server.listen(4000, "localhost", () =>
  console.log("Server is Running on port 4000")
);
