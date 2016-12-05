var fs = require('fs');
var data = 'test stream write function';

var writerStream = fs.createWriteStream('../input/writerStream.txt');
writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function() {
	console.log('write end...');
});

writerStream.on('error', function(error) {
	console.log(error.stack);

});

console.log('The End');
