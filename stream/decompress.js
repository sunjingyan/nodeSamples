var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('../input/file1.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('../input/file1_unzip.txt'));

console.log('decompress file finished');