// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   // from 0 to n(iteracte thr rows)
//     // create an empty string, 'stair'
//     // from 0 to n (iteracte thru columns)
//       // if the current col is equal to or less than the current row
//       // add a '#' to stair
//       // else 
//       // add a space to 'stair'
//     // console.log
  
//   for(let row = 0; row < n; row++){
//     let stair = ''
//     for(let column = 0; column < n ;column++){
//       if(column <=row){
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

// solution 2 
function steps(n, row = 0, stair = '') {
  // if (row === n) then we have hit the end of out problem
  if(n ===row) {
    return 
  }
  // if the 'stair' has a length === n then we are at the end of a row
  if(n === stair.length){
    console.log(stair);
    return steps(n, row +1)
  }
  // if the length of the stair string is less than or equal to the row number we're woring on, we add a '#', otherwise add a space

  // if(stair.length <= row){
  //   stair += '#'
  // } else {
  //   stair += ' '
  // }

  const add = stair.length <= row ? '#' : ' '

  steps(n, row, stair + add)
}

module.exports = steps;
