'use strict';
const express = require('express')
const cors = require('cors')
const server = express()

const port = process.env.PORT || 8080

server.use(express.static(__dirname + '/public'))
server.use(cors())

server.get('/test', function(req, res){
	res.sendFile('index.html', {root: __dirname + '/public/html'})
})

server.listen(port, function(){
	console.log('Now listening on port...', port)
})
