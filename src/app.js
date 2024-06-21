import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Resposta sucesso")
})

app.get('/teste', (req, res) => {
    res.status(200).send("Entrei na rota /teste")
})

export default app;