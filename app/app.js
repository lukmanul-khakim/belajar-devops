const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello dari Node.js!\n');
});

server.listen(3001, () => {
  console.log('Server jalan di port 3001');
});
