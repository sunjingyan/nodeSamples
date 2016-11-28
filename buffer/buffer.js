//init
var buffer1 = new Buffer(10);
var buffer2 = new Buffer([10, 20, 30, 40, 50]);
var buffer3 = new Buffer("www.ibm.com", "utf-8");

//write
//buf.write(string[, offset[, length]][, encoding])
var len1 = buffer1.write("123");
console.log("len1: "+len1);

//read
//buf.toString([encoding[, start[, end]]])
var buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//toJSON
var json1 = buf.toJSON(buf);
//console.log(json1);
buf = new Buffer('www.ibm.com');
var json = buf.toJSON(buf);
//console.log(json);

//Buffer.concat(list[, totalLength])
var buffer5 = new Buffer("I'm learning node.js now.   ");
var buffer6 = new Buffer('www.ibm.com');
var buffer7 = Buffer.concat([buffer5,buffer6]);
//var buffer7 = Buffer.concat([buffer5,buffer6],10);
console.log("buffer7 内容: " + buffer7.toString());

//buf.compare(otherBuffer);
var buffer8 = new Buffer('ABC');
var buffer9 = new Buffer('ABCD');
var result = buffer8.compare(buffer9);

if(result < 0) {
   console.log(buffer8 + " 在 " + buffer9 + "之前");
}else if(result == 0){
   console.log(buffer8 + " 与 " + buffer9 + "相同");
}else {
   console.log(buffer8 + " 在 " + buffer9 + "之后");
}


//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
var buffer10 = new Buffer('ABCDEFG');
// 拷贝一个缓冲区
var buffer11 = new Buffer(5);
buffer10.copy(buffer11);
console.log("copy------buffer11 content: " + buffer11.toString());

//buf.slice([start[, end]])([)前闭后开)
var buffer12 = new Buffer('www.ibm.com');
// 剪切缓冲区
var buffer13 = buffer12.slice(0,2);
console.log("slice-----buffer13 content: " + buffer13.toString());

//buf.length
console.log(buffer12.length);






