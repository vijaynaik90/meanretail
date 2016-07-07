var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);
require('./dependencies')(wagner);

var app = express();

app.use(require('morgan')());

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

// Serve up static HTML pages from the file system.
// For instance, '/6-examples/hello-http.html' in
// the browser will show the '../6-examples/hello-http.html'
// file.
app.use(express.static('./public', { maxAge: 4 * 60 * 60 * 1000 /* 2hrs */ }));
/*
app.set('views', __dirname + '/../');

app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});
*/
/*var port = process.ENV.PORT || 4000
app.listen(port);
console.log('Listening on port'+ port);
*/

var server = app.listen(process.env.PORT || 4000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});
