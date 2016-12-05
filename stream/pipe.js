var fs = require('fs');

var readerStream = fs.createReadStream('../input/file1.txt');

var writerStream = fs.createWriteStream('../input/pipe.txt');

readerStream.pipe(writerStream)

console.log('The End');