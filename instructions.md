**Title: Implement Bubble Sort Algorithm**

**Objective:**
Develop a JavaScript function that performs the Bubble Sort algorithm on an array of numbers. The function should sort the array in ascending order and return the sorted array.


**Given the following input:**

```javascript
const inputArray = [34, 12, 24, 9, 5];

console.log("Sorted Array:", bubbleSort(inputArray));
```

For example, after implementing the `bubbleSort` function, you should be able to produce the following output:
```javascript
[5, 9, 12, 24, 34]
```

<details>
<summary>Hints</summary>

1. Define a function `bubbleSort(arr)` that takes an array `arr` as its parameter.
2. Create a nested loop structure: the outer loop (i) to control the overall passes and the inner loop(j) to perform element comparisons and swaps.
3. Compare adjacent elements in the inner loop. If the current element (`arr[j]`) is greater than the next (`arr[j + 1]`), swap them.
4. After each outer loop pass, check if any swaps were made. If no swaps occurred, break the outer loop(i) early as the array is sorted.
5. Once the outer loop completes, return the sorted array.
6. Test your function with `inputArray` and use `console.log` to verify if the array sorts correctly.

Remember, Bubble Sort involves comparing and potentially swapping adjacent elements in each pass through the array.

</details>

**Challenge:**

- Try to optimize your Bubble Sort implementation for scenarios where the array is almost sorted initially.
- Consider additional test cases with different types of arrays (e.g., empty array, array with repeating elements) to ensure your function is robust.
