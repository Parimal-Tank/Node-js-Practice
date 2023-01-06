const fs = require('fs');

// const readMe = fs.readFileSync('./readMe.txt' , 'utf8');
// console.log(readMe);

// fs.writeFileSync('writeMe.txt' , readMe);

//  let readMe = readFile('./readMe.txt' , 'utf8' , function(err , data){
//     fs.writeFile('writeMe.txt' , data);
// });


// Example of read file and Write file
// fs.readFile('./readMe.txt', {encoding : 'utf8'} , function(err , data){
//      if(err){
//         console.log(err);
//      }
//      else{
//         fs.writeFile('writeMe.txt' , data , function(){
//             console.log("write file successfully")
//         });
//         //console.log(data);
//      }
// });


// Creating file example 

// fs.mkdir('readMe' , function(){
//     fs.readFile('readMe.txt' , 'utf-8' , function(err , data) {
//             console.log("File Creating succssfully");
//             fs.writeFile('./readMe/writeMe.txt' , data , function(err){
//                        //console.log(err);
//                       console.log("write file successfully")
//             });
//         }
//     )}
// );

// Removing file Example 
// fs.rmdir('readMe' , function(){
//     fs.readFile('writeMe.txt' , 'utf-8' , function(err , data) {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File Removing succssfully");
//         }
//     })
// });

// fs.unlink('./readMe/writeMe.txt' , fuction(){
//     fs.rmdir('readMe')
// });

// Asynchoronus function require a callback(like error handaling)

// fs.unlink('./readMe/writeMe.txt' ,function(err){
//     if(err) {console.log(err);}
//      fs.rmdir('./readMe' , function(err) {
//         if(err) {console.log(err);}
//      });
// });

// fs.rmdir(readMe);
// fs.rmdirSync('readMe');