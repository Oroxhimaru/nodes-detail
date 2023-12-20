const narutoCharacter = ['Rock lee', 'Neji', 'TenTen', 'Might Guy'];
//simple array strings

console.log(narutoCharacter);

//we will export this file in modules.js

//yeah here manually export
// module.exports = "Hello, Ninja"; exporting string ,  commenting coz can't export more than one
module.exports = narutoCharacter; //exporting array variable

// for exporting more than one
const naruto = ['naruto', 'sakura', 'sasuke', 'kakashi'];
const narutoMoves = ['rasengan', 'crying', 'fireball jutsu', 'chidori'];
module.exports = {
    naruto, narutoMoves //naruto : naruto this is same as naruto coz first one is property second is value, we are using shortcut by naming them same.

}
