var express = require('express');
var wagner = require('wagner-core');

require('./server/models')(wagner);
require('./server/dependencies')(wagner);

var app = express();

app.use(require('morgan')());

wagner.invoke(require('./server/auth'), { app: app });

app.use('/api/v1', require('./server/api')(wagner));

// Serve up static HTML pages from the file system.

app.use(express.static('./public', { maxAge: 4 * 60 * 60 * 1000 /* 2hrs */ }));
/*
app.set('views', __dirname + '/../');

app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});
*/

var port = process.env.PORT || 4000;
app.listen(port);
console.log('Listening on port'+ port);



