var express = require('express');
var path = require('path');
var compress = require('compression');
var logfmt = require("logfmt");
var app     = express();


app.use(logfmt.requestLogger());
app.use(compress());

app.use(express.static(__dirname + '/dist'));

app.all('*', function(req, res, next) {
  if(req.path.match(/\.(html|js|css|png|jpg|jpeg|gif|webp|svg)$/)) {
    return next();
  }

  res.sendFile(__dirname + '/dist/index.html');
});

var port = Number(process.env.PORT || 8080);
app.listen(port, function() {
  console.log("Listening on " + port);
});
