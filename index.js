const requestListener = function (req, res) {
    const clientInfo = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Information</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f9;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        table {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        th, td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        pre {
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>
<body>
    <h1>Client Information</h1>
    <table>
        <tr>
            <th>Property</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>IP Address</td>
            <td>${req.socket.remoteAddress}</td>
        </tr>
        <tr>
            <td>Port</td>
            <td>${req.socket.remotePort}</td>
        </tr>
        <tr>
            <td>HTTP Method</td>
            <td>${req.method}</td>
        </tr>
        <tr>
            <td>URL</td>
            <td>${req.url}</td>
        </tr>
        <tr>
            <td>HTTP Version</td>
            <td>${req.httpVersion}</td>
        </tr>
        <tr>
            <td>User-Agent</td>
            <td>${req.headers['user-agent'] || 'N/A'}</td>
        </tr>
        <tr>
            <td>Accept</td>
            <td>${req.headers['accept'] || 'N/A'}</td>
        </tr>
        <tr>
            <td>Accept-Language</td>
            <td>${req.headers['accept-language'] || 'N/A'}</td>
        </tr>
        <tr>
            <td>Accept-Encoding</td>
            <td>${req.headers['accept-encoding'] || 'N/A'}</td>
        </tr>
        <tr>
            <td>Connection</td>
            <td>${req.headers['connection'] || 'N/A'}</td>
        </tr>
        <tr>
            <td>Host</td>
            <td>${req.headers['host'] || 'N/A'}</td>
        </tr>
        <tr>
            <td>All Headers</td>
            <td><pre>${JSON.stringify(req.headers, null, 2)}</pre></td>
        </tr>
    </table>
</body>
</html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(clientInfo);
};


const http = require('http');

const server = http.createServer(requestListener);
server.listen(2626, () => {
    console.log('Server is running on http://localhost:2626');
});

