var fs = require('fs');
console.log("同步编程");
var data = fs.readFileSync('../input/file1.txt');
console.log(data.toString());
console.log("我在文件读取后才被调用");