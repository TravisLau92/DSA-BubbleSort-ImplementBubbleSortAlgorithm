// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // outer loop
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    // inner loop
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap the element
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // If two elements were swapped, the array is sorted
    if (!swapped) break;
  }
  return arr;
}

// Example usage
const inputArray = [34, 12, 24, 9, 5];
console.log("Sorted array:", bubbleSort(inputArray));