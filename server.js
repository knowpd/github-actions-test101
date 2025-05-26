// 2022-06-03 knowpd
// <https://nodejs.org/en/docs/guides/getting-started-guide/>

const http = require('http');

const hostname = '';
const port = 8080;

const server = http.createServer((req, res) => {
  console.log('request: ', req.url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Olivia')
});

server.listen(port, hostname, () => {
  console.log(`Server running at port ${port}`);
});
