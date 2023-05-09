// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// solution 1: linear runtime
// function fib(n) {
//    const result = [0,1]
//    for(let i = 2; i <= n; i++) {
//     const a = result[i-1]
//     const b = result[i-2]

//     result.push(a+b)
//    }

//    return result[n]
// }


// solution 2 recursive: exponential runtime
function slowFib(n) {
  if(n < 2){
    return n
  }

  return fib(n -1) + fib(n-2)
  // we can find out the identical function will be called many times
  // if we want to improve it. => memorization: Store the arguments of each function call along with the result.
  // if the function is called again with the same arguments, return the precomputed result, rather than running the function again
}


// solution 2 recursive: exponential runtime
function memorization(fn) {
  const cache = {}
  return function(...args) {
    if(cache[args]){
      return cache[args]
    }
    const result = fn.apply(this,args)
    cache[args] = result
  
    return result
  }
}

const fib = memorization(slowFib)
module.exports = fib;
