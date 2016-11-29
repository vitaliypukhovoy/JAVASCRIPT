var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var port = process.env.port || 1337;


http.createServer(function (req, res) {

   // var path = req.parse(req.url, true).query;

   

    var file_path = path.join(__dirname,'Index.html')
    if (req.url == '/') {
        fs.readFile(file_path, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data.toString());
            };

            res.end();
        });
    }
    /////////



    else if (req.url = '/test') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<b>Response /test</b>');
        res.end();
    }
    else
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Respons');
        res.end();

    }


    console.log(`${req.url}\n\r${req.method}`);
 
   // res.writeHead(200, { 'Content-Type': 'text/html' });   
   // res.write(`${req.url}\n\r${req.method}`);



}).listen(port, function () {
    console.log('Server start');
});
//const http = require('http');
//const port = process.env.port || 1337;

//const server = http.createServer().listen(port);

//server.on('request', function (request, response) {
//    response.writeHead(200, { 'Content-Type': 'text/html' });
//    response.end('Hello World');
//});

//server.on('connection', function () {
//    console.log('client connected');
//}); 