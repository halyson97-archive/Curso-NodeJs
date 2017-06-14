var i = setInterval(function () {
	console.log("interval");
}, 1000);

setTimeout(function () {
	clearInterval(i);
}, 5000)