// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution 1
// function pyramid(n) {
//   const midPoint = Math.floor((2*n -1) / 2)

//   // From 0 to n(iterate thru rows)
//     // create an empty string, 'level'

//   // from 0 to clumns

//   // if the column should have a '#'
//     // add a '#' to level 
//   // ELSE
//     // Add a space to level
//   // console.log 'stair'
//   for(let row = 0; row < n; row++) {
//     let level = ''

//     for(let column = 0; column < 2 * n -1; column ++) {
//       if(midPoint - row <= column && midPoint + row >= column){
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }
//     console.log(level)
//   }
// }

// solution 2 recursion
function pyramid(n, row = 0, level = '') {
 if(row === n) return

 if(level.length === 2 * n - 1){
  console.log(level);
  return pyramid(n, row + 1)
 }
 const midPoint = Math.floor((2*n -1) / 2)
 let add
 if(midPoint - row <= level.length && midPoint + row >= level.length){
  add = '#'
 } else {
  add = ' '
 }
 pyramid(n, row, level + add)
}


module.exports = pyramid;
