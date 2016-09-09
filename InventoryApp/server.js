var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set("views", "./app/views");
app.use(express.static('./public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    var users = [{
            name: "kiran",
            age: 30,
            SSN: "1234567890"
        },
        {
            name: "kiran",
            age: 30,
            SSN: "1234567890"
        },
        {
            name: "kiran",
            age: 30,
            SSN: "1234567890"
        }]
    res.render('index', {
        data: users
    });
});
app.get('/index', function (req, res) {
    res.send('<h1>I am the index page');
});
app.get('/about', function (req, res) {
    res.render("about");
});
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});
app.listen(9000);
console.log("application running on port 9000");
