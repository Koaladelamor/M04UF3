#!/usr/bin/node

let http = require("http");
let fs = require("fs");

console.log("Iniciando...");

let http_server = http.createServer(function(req, res){
	
	if(req.url == "/character.png") {
		
		fs.readFile("character.png", function(error, data){
			if (error) {
				console.log("error reading file");
				return;
			}

			res.writeHead(200);
			res.end(data);

		});

		return;

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
