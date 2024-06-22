import express from 'express';

const app = express();
app.use(express.json());

const books = [
    {
        id: 1,
        titulo: "Harry Potter e a Pedra Filosofal"
    },
    {
        id: 2,
        titulo: "Do Átomo ao Buraco Negro"
    }
]

const searchBook = (id) => {
    const foundBook = books.find(book => book.id === Number(id));
    return foundBook;
}

const findIndexBook = (id) => {
    const index = books.findIndex(book => book.id === Number(id));

    return index;
}

app.get('/', (req, res) => {
    res.status(200).send("success")
})

app.get('/livros', (req, res) => {
    res.status(200).json(books);
})

app.get('/livros/:id', (req, res) => {

    const {id} = req.params;
    const foundBook = searchBook(id);

    if (foundBook) {
        res.status(200).json(foundBook);
    } else {
        res.status(404).send("No book found!")
    }
})

app.post('/livros', (req, res) => {
    books.push(req.body);
    res.status(201).send("Book added successfully!");
})

app.put('/livros/:id', (req, res) => {

    const {id} = req.params;
    const bookIndex = findIndexBook(id);

    books[bookIndex].titulo = req.body.titulo;
    res.status(200).json(books)
    
})

app.delete('/livros/:id', (req, res) => {

    const {id} = req.params;
    const bookIndex = findIndexBook(id);

    books.splice(bookIndex, 1);

    res.status(200).json(books);

})

export default app;