var bowser = require('bowser');

var func = function() {
	if (bowser.firefox) {
		console.log("firefox");
	}
	else if (bowser.chrome) {
		console.log("chrome");
	}
	else if (bowser.safari) {
		console.log("safari");
	}
	else if (bowser.iphone) {
		console.log("iphone");
	}
	else if (bowser.android) {
		console.log("android");
	}
	else {
		console.log("nothing");
	}
}
module.exports = func();
