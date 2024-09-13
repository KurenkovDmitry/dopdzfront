const now = 0;

const http = require('http');
const debug = require('debug')('http');

debug('booting best server ever');
const fs = require('fs');

const PORT = 3000;

const sites = [
    {
        path: '../public/var1'
    }, {
        path: '../public/var2'
    }, {
        path: '../public/var3'
    }
]

const server = http.createServer((req, res) => {
        const {url} = req;

        const path = (url === '/')? '/index.html' : url;

        const file = fs.readFile((url === '/index.js') ? '../public/index.js' : sites[now].path + path, (err, data) => {
            if (err) {
                throw err;
            }
            debug(req.method + ' ' + req.url);
            res.write(data);
            res.end();
          })
    });

server.listen(PORT);