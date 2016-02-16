require('dotenv').config();
var express = require('express');
var nunjucks = require('nunjucks');
var time2json = require('./time2json');
var app = express();

nunjucks.configure('templates', {
  autoescape: true,
  express: app
});

app.get('/', function(req, res) {
  res.render('index.html', {app_url: process.env.APP_URL});
});

app.get('/:time', function(req, res) {
  res.end(time2json(req.params.time) + '\n');
});

app.listen(process.env.PORT, function() {
  console.log('Server start, listen on ' + process.env
  .IP + ':' + process.env.PORT);
});
