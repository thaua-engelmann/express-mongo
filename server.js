// import http from 'http';
import app from './src/app.js';

const PORT = 3000;

const routes = {
    "/": "My first default route",
    "/teste": "teste second route"
}

app.listen(PORT, () => {
    console.log("server listening!");
});