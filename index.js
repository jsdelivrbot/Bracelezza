var express = require('express'),
    compression = require("compression"),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render("bracelezza");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});