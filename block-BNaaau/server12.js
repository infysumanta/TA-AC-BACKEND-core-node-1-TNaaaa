// Handle 2 requests on same route with different method
// 1. GET on '/users' route where return a simple HTML form with name and email field
// 2. POST on '/users' route with a message 'Posted for the second time'.

const http = require("http");
const url = require("url");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  let pathname = url.parse(req.url).pathname;
  let method = req.method;

  if (method === "GET" && pathname === "/users") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<form action='/users' method='POST'><input type='text' name='name' placeholder='name'><input type='email' name='email' placeholder='email'><button>Submit</button></form>"
    );
  } else if (method === "POST" && pathname === "/users") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Posted for the second time</h2>");
  }
}

server.listen(3333, () => {
  console.log("Server is listening on port 3333");
});
