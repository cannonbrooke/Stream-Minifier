var stream = require('stream');
var fs = require('fs'); // require file system Write buffer to the file specified by fd.

var minified = fs.createWriteStream('./foundation.css', 'utf8'); //it is unsafe to use fs.write multiple times on the same file without waiting for the callback. For this scenario, fs.createWriteStream is strongly recommended.
var Transform = stream.Transform;
var fileMini = new Transform();



fileMini._transform = function(chunk, encoding, done){ //chunk buffer, encoding string, callback
  var string = "";
  string += chunk; // chunk is object but when added to string becomes string
  string = string.replace(/\s/g, "").replace(/(\/\*).*(\*\/)/g, ""); // goes through string finds values to replace
  process.stdout.write(string, 'utf8'); // sends out the data
};

process.stdin // pipes in the data
  .pipe(fileMini)
  .pipe(process.stdout);












// var stream = require('stream');
// process.stdin.setEncoding('utf8');


// process.stdin.on('data', function(chunk) {
//   console.log("taking in data");
//   // var chunk = process.stdin.read();
//   if (chunk !== null) {
//     // process.stdout.write(chunk);
//     // chunk.pipe(remove);
//     console.log(chunk);
//   }
// });

//   var style = stream.Transform();

//   style._transform = function(chunk, enc, next){
//     var remove = string.replace(/\s/g, "").replace(/(\/\*).*(\*\/)/g, "");
//     this.push(remove);
//     setTimeout(function(){
//       next();
//     }, 100);

// // function removeWhiteSpace(){
// //   }
// //   return remove;
  // };