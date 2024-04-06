const express = require('express');
const app = express();
const path = require('path');
console.log(process.env.API_KEY);
const gpt = require('./gpt');

// hbs setup
app.set("view engine", "hbs");
app.set('views', path.resolve(__dirname, 'views'));

// static content
app.use(express.static(path.resolve(__dirname, 'static')));

// home page
app.get('/', (req, res) => {
    res.render("index", {})
});

// account page
app.get('/account', (req, res) => {
    res.render("account", {})
});

// aihealth page
app.get('/aihealth', (req, res) => {
    res.render("aihealth", {})
});

// doctor page
app.get('/doctor', (req, res) => {
    res.render("doctor", {})
});

app.listen(3000, () => {
    console.log(`server ready on port 3000.`);
});

module.exports = app;