const http = require("node:http");

const server = http
  .createServer((req, res) => {
    if (req.url === "/api") {
      res.end("There is no API available as of now....");
    }
    res.end("hellow World...");
  })
  .listen(3333);
