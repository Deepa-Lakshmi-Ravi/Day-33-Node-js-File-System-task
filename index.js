const http = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const date = new Date();
  const formattedDate = date.toISOString().replace(/[-T:]/g, "").split(".")[0];
  const filename = `${formattedDate}.txt`;
  try {
    fs.appendFileSync(`./node/${filename}`, `${date}`);
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end(`${filename} creation inside node folder successfull`);

    const files = fs.readdirSync("./node");
    console.log(files);
  } catch (err) {
    console.log(err);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ happily`);
});
