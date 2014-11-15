var express = require('express');
var arduino = require('duino');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Home Automators' });
});

router.get('/switchOn', function(req, res) {
  var board = new arduino.Board();

  var rc = new arduino.RC({
    board: board,
    pin: "10"
  });

  board.on('ready', function(){
    setTimeout(function() {
      rc.triState("F000FFFF0101");
    }, 1000);
  });

  res.render('index', { title: 'Living room light is on!!!' });
});

router.get('/switchOff', function(req, res) {
  var board = new arduino.Board();

  var rc = new arduino.RC({
    board: board,
    pin: "10"
  });

  board.on('ready', function(){
    setTimeout(function() {
      rc.triState("F000FFFF0110");
    }, 1000);
  });

  res.render('index', { title: 'Living room light is off' });
});



module.exports = router;
