var fs = require('fs');

var file;

fs.open('file.txt', 'r', function(err, handle) {
	var buf = new Buffer(100000);
	fs.read(handle, buf, 0, 100000, null, function() {
		console.log(buf.toString());
		fs.close(handle, function() {
			
		});
	});
});

