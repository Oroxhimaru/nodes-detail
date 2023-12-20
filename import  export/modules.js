const narutoWorld = require('./people');

/* give address to require and it will bring that file like in this case ./people which is peopls.js,
 and write in terminal node modules. and you have import the people.js file here*/

 console.log(narutoWorld); //This will bring empty object
 //console.log(narutoCharacter); //we can't run that too,  this variable define in people.js file

// for importing we have to manually export from people.js go to that file.
//console.log(narutoWorld); this will not bring empty string after exporting, instead it will show array from people.js
console.log(narutoWorld.naruto, narutoWorld.narutoMoves); //for in same line in terminal

//another way of importing mutiple is {put the property name here}
const {naruto , narutoMoves} = require('./people');
console.log(naruto, narutoMoves);



//built in nodeJS
const os = require("os");
// console.log(os); try this first (operatiing system os)

console.log(os.platform(), os.homedir());