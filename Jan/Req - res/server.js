const http = require("http");

const server = http.createServer((req, res) => {
  console.log("successfully got req");

  res.writeHead(200, "got successfull");
  setTimeout(() => {
    res.end("new wasdrfowo");
  }, 100);
});

server.listen(3000, () => {
  console.log(`Server is listening at 3000`);
});
