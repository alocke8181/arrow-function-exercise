// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }


let doubledArr = arr => arr.map(val => val*2);

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

let squaredEvensOnly = numbers => numbers.map(value => value **2).filter(squared => squared % 2 ===0);