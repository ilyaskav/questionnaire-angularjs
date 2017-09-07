var express = require('express');
var app = module.exports = express();
var mongoose = require('./config/mongoose.js');

// Connect to database

// var done = this.async();

// Connect to database
// mongoose.connect(function(db) {
//     done();
// });
mongoose.connect(function (){
    require('./config/routes.js')(app);

});

var port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);