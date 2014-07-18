var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

function dataEvent(data,e) {
  console.log("Data event!");
  console.log(data);
}

event.once("hello", dataEvent);
event.emit("hello", {hello:"world"});

event.on("foo", dataEvent);
event.emit("foo", {foo:"bar"});
event.emit("foo", {baz:"buz"});