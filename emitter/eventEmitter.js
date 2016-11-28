var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
	console.log('listener1...');
}

var lsitener2 = function lsitener2() {
	console.log('lsitener2...')
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', lsitener2);
eventEmitter.emit('connection');

var eventListeners = require('events').EventEmitter
.listenerCount(eventEmitter, 'connection');

console.log('最初一共' + eventListeners + '个监听器监听事件。');

eventEmitter.removeListener('connection', listener1);
console.log('移除listener1 不再受监听');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter
.listenerCount(eventEmitter,  'connection');
console.log('移除listener1后还有' + eventListeners + '个监听器监听事件。');


