const express = require('express');
const app = express();
const path = require('path');

// hbs setup
app.set("view engine", "hbs");
app.set('views', path.resolve(__dirname, 'views'));

// static content
app.use(express.static(path.resolve(__dirname, 'static')));

// home page
app.get('/', (req, res) => {
    res.render("index", {})
    //res.send("Hello World");
});

app.listen(3000, () => {
    console.log(`server ready on port 3000.`);
});

module.exports = app;