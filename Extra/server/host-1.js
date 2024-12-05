const { createServer } = require("node:http");
const fs = require("fs");

const hostname = "120.10.1.29";
const port = 3008;

const server = createServer((req, res) => {
  let fileName = "";
  switch (req.url) {
    case "/home":
      fileName = "./Home.html";
      break;
    case "/about":
      fileName = "./About.html";
      break;
    case "/contect":
      fileName = "./Contect.html";
      break;
    default:
      fileName = "./404.html";
      break;
  }
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.error(err);
      return false;
    }
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
