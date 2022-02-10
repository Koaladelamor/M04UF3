#!/usr/bin/node

let http = require("http");
let fs = require("fs");
let assets = require("./assets.json");

console.log("Iniciando...");

let http_server = http.createServer(function(req, res){
	
	for(let i = 0; i < assets.images.length; i++){
		
		if(req.url == "/" + assets.images[i]) {
			
			fs.readFile(assets.images[i], function(error, data){
				if (error) {
					console.log("error reading file");
					return;
				}

				res.writeHead(200);
				res.end(data);

			});	
		}
	}

	fs.readFile("index.html", function(error, data){
		if (error) {
			console.log("error");
			return;
		}
		
		res.writeHead(200);

		res.end(data);
		
	});

}).listen(1095);
