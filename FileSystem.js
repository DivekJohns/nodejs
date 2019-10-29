var fs = require("fs");
/*
console.log("Write data into file");
fs.writeFile('input.txt', 'Hey ,how are you guys??',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   //console.log("Let's read newly written data");
 
});
*/

//reading from a file
let callback=function (err, data) {
  if (err) {
     return console.error(err);
  }
  console.log("Read file asynchronously: " + data.toString());
};
fs.readFile('input.txt',callback);//20 mins
console.log("ready");

  //reading file synchronysly
  var data = fs.readFileSync( 'input.txt');
  console.log( data.toString() );
  console.log( "Do other tasks");

   
   
/*
console.log("Going to create directory D://Node.js-zenrys//NodeApp//test");
fs.mkdir('D://Node.js-zenrys//NodeApp//test',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});
*/

/*

console.log("Going to read directory D://Node.js-zenrys//NodeApp//");
fs.readdir("D://Node.js-zenrys//NodeApp//",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});

*/
