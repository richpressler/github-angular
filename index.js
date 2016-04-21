var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var https = require('https');

var apiClientId = 'c027f603d41d3cfe8e67';
var apiSecret = 'a786d611d4c948ec9566fe7ad85928874dc713ee';
var apiAccessUrl = 'https://github.com/login/oauth/access_token';

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.render('./index.html');
});
app.get('/login', function(request, response) {
  response.render('./index.html');
});
app.get('/repos', function(request, response) {
  response.render('./index.html');
});
app.post('/access_token', function(request, response) {
  var code = request.body.code;

  var postData = 'client_id=' + apiClientId + '&client_secret=' + apiSecret + '&code=' + code;

  // Create options object for new POST request
  var options = {
    hostname: 'github.com',
    path: '/login/oauth/access_token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }

  var result = '';
  var post_req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      result += chunk;
    });
    res.on('end', function() {
      response.send(result);
    });
  });

  post_req.write(postData);
  post_req.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
