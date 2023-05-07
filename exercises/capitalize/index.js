// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // 轉成陣列 making an empty array words
  const words = []
  // split the input string by spaces to get an array
  for(let word of str.split(' ')) {
    // uppercase the first letter of the word
    // join first letter with rest of the string
    words.push(word[0].toUpperCase()+ word.slice(1))
  }
  return words.join(' ')
}

// solution 2
function capitalize(str) {
  // create an empty string called result which is the first character of the input string capitalized
  let result = str[0].toUpperCase()
  // for each character in the string
  for(let i = 0; i < str.length; i++){
    // if the character to the left a space
      // Capitalize it and add it to 'result'
      if(str[i - 1]=== ' ') {
        result += str[i].toUpperCase()
      } else {
        // ELSE add it to 'result' 
        result += str[i]
      }
  }
  return result
}

module.exports = capitalize;
