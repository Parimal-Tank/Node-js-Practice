// Example of Read Stream
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt')


myReadStream.on('data' , function(chunk) {
    console.log('A new chunk is received'); 
    console.log(chunk);
});


