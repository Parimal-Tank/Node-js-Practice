// Example of Write Stream
const fs = require('fs');

// const myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
// const myWriteSream = fs.createWriteStream(__dirname + '/myWrite.txt');

// myReadStream.on('data' , function(chunk){
//     console.log('New Chunk Received');
//     myWriteSream.write(chunk);
// })

//Example of Pipe Stream
// insted of writing doing manually reading and writing doing in one in both.

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf-8');
const myWriteSream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.pipe(myWriteSream);