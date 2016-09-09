//--
var nxserver = new NXServer('/home/montassar/rtsp', 8080, '192.168.1.100', 8554);

// --
// start node server
function NXServer(httpUIDir, httpPort, streamIP, streamPort) {

	this.httpUIDir = httpUIDir; // __dirname
	this.httpPort = httpPort;
	this.streamIP = streamIP;
	this.streamPort = streamPort;

	var connect = require('connect'),
		http = require('http'),
		serveStatic = require('serve-static'),
		app = connect().use(serveStatic(this.httpUIDir)).listen(this.httpPort),    //running from file:///
		io = require('socket.io').listen(app);

	console.log("http server on "+this.httpPort);
	console.log("running on "+this.httpUIDir);
	console.log("running on "+this.streamIP);


	var ffmpeg = require('child_process').spawn("ffmpeg", [
		"-i",
		"rtsp://"+this.streamIP+":"+this.streamPort+"/vid",
		"-preset",
		"fast",
		"-f",
		"mjpeg",
		"-q:v",
		"4",
		"pipe:1"
		]);

	ffmpeg.on('error', function (err) {
		throw err;
	});

	ffmpeg.on('close', function (code) {
		console.log('ffmpeg exited with code ' + code);
	});

	ffmpeg.stderr.on('data', function (data) {
		//console.log('stderr: ' + data);
	});

	ffmpeg.stdout.on('data', function (data) {


		var frame = new Buffer(data).toString('base64');
		io.sockets.emit('canvas',frame);
	});
}
