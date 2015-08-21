var stream = require('stream');
var fs = require('fs'); // require file system

var minified = fs.createWriteStream('./foundation.css', 'utf8');
var Transform = stream.Transform;
var fileMini = new Transform();
var string = "";


fileMini._transform = function(chunk, encoding, done){
  var string = "";
  string += chunk;
  string = string.replace(/\s/g, "").replace(/(\/\*).*(\*\/)/g, "");
  minified.write(string, 'utf8');
};

process.stdin
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