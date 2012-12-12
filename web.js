var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');


var server = http.createServer(function(request, response) {

	var filePath = '.' + url.parse(request.url).pathname;
	if (filePath == './') filePath = './index.html';

	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
	case '.js':
		contentType = 'text/javascript';
		break;
	case '.css':
		contentType = 'text/css';
		break;
	}

	path.exists(filePath, function(exists) {

		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				} else {
					response.writeHead(200, {
						'Content-Type': contentType
					});
					response.end(content, 'utf-8');
				}
			});
		} else {
			response.writeHead(404);
			response.end();
		}
	});

});

var port = process.env.PORT || 5000;
server.listen(port);
console.log('started in port', port);
