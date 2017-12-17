var express = require('express')
var path = require('path')

var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended:true
}))

app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js')

routes_setter(app)

app.use(express.static(path.join(__dirname, "./client")))

//used to add the bower scripts from the index html page
app.use('/bower_components',  express.static(__dirname + '/bower_components'))

var server = app.listen(8000, function() {
  console.log('Listening on port 8000....')
})
