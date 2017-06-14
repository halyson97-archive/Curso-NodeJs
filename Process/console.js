var konsole = {
	log: function (msg) {
		process.stdout.write(msg + "\n");
	},
	error: function(msg){
		process.stderr.write(msg + "\n");
	}
}

konsole.log("A");
konsole.error("Error");