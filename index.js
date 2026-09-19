const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("Mary Poppins");
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});