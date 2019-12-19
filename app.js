
var express = require('express');
var app = express();
var path = require('path');

myConnection = require('express-myconnection');

var mysql = require('mysql');

app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '01310707',
  port: 3306,
  database: 'testo'
}, 'single'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))

const Routes = require('./routes/index');

app.use('/', Routes)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'style')));
app.use(express.static('style'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });