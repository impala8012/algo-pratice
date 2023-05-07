// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let ans = ''
  // for (let i = str.length - 1; i >= 0; i--) {
  //   ans += str[i]
  // }
  // return ans



  // solution 2
  // const arr = str.split('')
  // arr.reverse()
  // return arr.join('')
  // return str.split('').reverse().join('')



  // solution3 use for of instead of classic for loop
  // let reversed = ''
  // for (let characters of str){
  //   reversed = characters + reversed
  // }
  // return reversed



  // solution 4 
  return str.split('').reduce((reversed, characters) => characters + reversed,'')
}

module.exports = reverse;
