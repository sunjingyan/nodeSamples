var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('../input/file1.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('../input/file1.txt.gz'));

console.log('file compress end...');