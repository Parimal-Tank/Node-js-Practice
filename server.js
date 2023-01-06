const http = require('http');
const fs = require('fs');

//Exmple of create Server

// const server = http.createServer(function(req , res){
//     console.log('request was made: ' + req.url);

//     res.writeHead(200 , {'Content-Type' : 'text/plain'}); // header status and content type
//     res.end("Hello From Hader Data");    //  header body
// })



// const server = http.createServer(function(req , res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200 , {'Content-Type' : 'text/html'}); // header status and content type
//     const myReadStream = fs.createReadStream(__dirname + '/index.html' , 'utf8');
//     myReadStream.pipe(res);
//     // res.end("Hello From Hader Data");    //  header body
// })


// Example of Servaying JSON Data
// const server = http.createServer(function(req , res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200 , {'Content-Type' : 'application/json'}); // header status and content type
//     const myObj = {
//         name : 'parimal',
//         sureName : 'tank'
//     }
//     res.end(JSON.stringify(myObj));
//     // res.end("Hello From Hader Data");    //  header body
// })

// server.listen(3000 , '127.0.0.1');    // Server Port
// console.log("Server , now listening to port 3000");


