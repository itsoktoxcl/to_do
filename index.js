const requestListener = function (req, res) {
    const clientInfo = `
Client Information:
==================
IP Address: ${req.socket.remoteAddress}
Port: ${req.socket.remotePort}
HTTP Method: ${req.method}
URL: ${req.url}
HTTP Version: ${req.httpVersion}
User-Agent: ${req.headers['user-agent']}
Accept: ${req.headers['accept']}
Accept-Language: ${req.headers['accept-language']}
Accept-Encoding: ${req.headers['accept-encoding']}
Connection: ${req.headers['connection']}
Host: ${req.headers['host']}
Some Additional Info : Some additional info

All Headers:
${JSON.stringify(req.headers, null, 2)}
    `;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(clientInfo);
};


const http = require('http');

const server = http.createServer(requestListener);
server.listen(2626, () => {
    console.log('Server is running on http://localhost:2626');
});

