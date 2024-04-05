const express = require('express');
const app = express();
const port = 3000;

// hbs setup
app.set("view engine", "hbs");

// static content
app.use(express.static('./static'));

// home page
app.get('/', (req, res) => {
    res.render("index", {})
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});