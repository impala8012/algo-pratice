// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // from i = 0 to < array length
  for(let i = 0; i < arr.length; i++) {
    // from j = 0 to (arr length - i)
    for(let j = 0; j < (arr.length - i - 1); j ++){
      // if the element at j is greater than j+1
      if(arr[j] > arr[j+1]){
        // swap elements at j and j + 1
        const lesser = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = lesser
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  // from i = 0 to < arr length
  for(let i = 0; i < arr.length; i++){
    // assume the element at 'i' is the least in the arr, assign i to 'indexOfMin'
    let indexOfMin= i
    // for j from i+1 to end of arr
    for(let j = i+1; j <arr.length; j++){
      // see if there is an element with lower value
      if(arr[j] < arr[indexOfMin]){
        // if there is, record its index
        indexOfMin = j
      }
    }
    // if the idx of the current element and the index of the 'lowest' element is not the same, swap them
    if(indexOfMin !== i) {
      // swap
      let lesser = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesser
    }
  }
  return arr
}

function mergeSort(arr) {
  if(arr.length === 1) return arr

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  // create 'results' arr
  const results = []
  // while there are still element in both arrs
  while(left.length && right.length){
    // if the first element the left half is less than first in right half
    if(left[0] < right[0]){
      // 'shift' the lement from left into a 'result' arr
      results.push(left.shift())
    } else {
      // else
        // 'shift' the element from right into a 'result' arr
      results.push(right.shift())
    }    
  }  
  // Take everything from the arr thay still has stuff in it and put it in results
  return [...results, ...left,...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
