// 7. 印出下圖，並轉 90°
//    ** ** 
//   ******* 
//  *********
//  *********
//   *******
//    *****
//     ***
//      *
const rl = require('../readline.module');
const { printStars, printRotateStarts } = require('./07.module');

console.log(printStars());
console.log(printRotateStarts());

rl.close();