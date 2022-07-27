const fs = require("fs");

//Async
fs.readFile("./content.md", "utf-8", (err, data) => {
  console.log(data);
});

//Sync
let fileData = fs.readFileSync("./content.md", "utf-8");
console.log(fileData);

let bufferOne = Buffer.alloc(10);
console.log(bufferOne);

bufferOne.write("Welcome to Buffer");
console.log(bufferOne);

console.log(bufferOne.toString());
