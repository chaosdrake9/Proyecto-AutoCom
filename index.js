var five = require("johnny-five");

var board = new five.Board({
     port: "COM6"
});

board.on("ready", function() {
  console.log("Placa activa");
});