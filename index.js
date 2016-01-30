require('dotenv').config();
var express = require("express");
var time2json = require("./time2json");
var app = express();

app.get('/:time', function(req, res) {
    res.end(time2json(req.params.time)+'\n');
});
app.listen(process.env.PORT, function(){
  console.log('Server start, listen on ' + process.env
  .IP + ':' + process.env.PORT);
});
