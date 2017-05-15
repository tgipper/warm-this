var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

app.use(express.static('assets'))

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
	res.render("index.html", { heading: "Test"})
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});