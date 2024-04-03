const express = require('express');
const app = express();
const port = 3000;

// static content
app.use(express.static('./static'));

// home page
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});