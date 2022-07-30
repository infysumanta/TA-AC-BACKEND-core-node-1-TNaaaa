//  create a server and handle query params from the request on following url i.e. /users?email=nodeserver@gmail.com from browser

// parse the request url using parse method from url module
// console pathname from parsed url in above step
// grab url using req.url
// differentiate between req.url and parsedUrl.pathname
// grab the email from query params
// return json response with email from query params

const http = require("http");

const url = require("url");

const server = http.createServer(handleResponse);

function handleResponse(req, res) {
  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname);
  let email = parsedUrl.query.email;
  res.end(JSON.stringify({ email: email }));
}

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
