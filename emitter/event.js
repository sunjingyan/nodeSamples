var events = require('events');
//create EventEmitter to bind and watch events
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('connected successfully');
	eventEmitter.emit('success_data');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('success_data', function() {
	console.log('successful data');

});

eventEmitter.emit('connection');