var fs = require('fs');
console.log("异步调用");
fs.readFile('../input/file1.txt', function(error, data) {
	if(error) return;
	console.log(data.toString());
});
console.log('我在文件读取完成前就被调用了');