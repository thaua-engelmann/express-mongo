import http from 'http';

const PORT = 3000;

const routes = {
    "/": "My first default route",
    "/teste": "teste second route"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': "text/plain"});
    res.end(routes[req.url]);
});

server.listen(PORT, () => {
    console.log("server listening!");
});