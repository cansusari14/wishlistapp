const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = path.join(require('os').homedir(), 'Desktop', 'wishlist');
http.createServer((req, res) => {
  const pathname = req.url.split('?')[0];
  const file = path.join(dir, pathname === '/' ? 'wishlist.html' : pathname);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200);
    res.end(data);
  });
}).listen(3456, () => console.log('ready'));
