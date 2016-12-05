console.log(__filename);

hello();
function hello() {
	console.time('get time');
	console.log('hello');
	setTimeout(hello, 2000);
	console.timeEnd('get time');

}

console.log(__dirname);

//setTimeout(hello, 2000);