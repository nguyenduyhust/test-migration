var debug = require('debug')('express-example');
var express = require('express');
var app = express();
var models = require("./models");

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
  });
});