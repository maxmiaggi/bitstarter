var express = require('express')
var fs = require('fs')
var app = express()
var filename = "./index.html"; 
var buf = fs.readFileSync(filename, 'utf8');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  // response.send('Hello World 3!')
  response.send(buf.toString())
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
