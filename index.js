// Import the interface to Tessel hardware
var tessel = require('tessel');
var express = require("express");
var bodyParser =require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
	res.send("here");
});

var server = app.listen(3000, function () {
	console.log("listening on port %s...", server.address().port);
});

// Turn one of the LEDs on to start.
tessel.led[2].on();

// Blink!
setInterval(function () {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);

console.log("I'm blinking! (Press CTRL + C to stop)");
