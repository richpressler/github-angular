var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  response.render('./index.html');
});
app.get('/login', function(request, response) {
  response.render('./index.html');
});
app.get('/repos', function(request, response) {
  response.render('./index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
