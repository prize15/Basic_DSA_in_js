/*Time Complexity:
Time complexity measures how the runtime of an algorithm changes as the size of the input changes.
 It’s often expressed using Big O notation.

Common Time Complexities
O(1) - Constant Time: The runtime does not change with the input size.
 */

function getFirstElement(arr) {
  return arr[0];
}
// This function always takes the same amount of time, regardless of the array size.


//O(n) - Linear Time: The runtime grows linearly with the input size.

function printAllElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// This function's runtime increases linearly with the size of the array.



//O(n^2) - Quadratic Time: The runtime grows quadratically with the input size.

function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
// This function's runtime increases quadratically with the size of the array.




//O(log n) - Logarithmic Time: The runtime grows logarithmically with the input size.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// This function's runtime increases logarithmically with the size of the array.




/*Space Complexity:
Space complexity measures the amount of memory an algorithm uses relative to the input size.

Common Space Complexities
O(1) - Constant Space: The memory usage does not change with the input size.*/

function multiply(a, b) {
  return a * b;
}
// This function uses a constant amount of memory.



//O(n) - Linear Space: The memory usage grows linearly with the input size.

function createArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}
// This function's memory usage increases linearly with the input size.



//O(n^2) - Quadratic Space: The memory usage grows quadratically with the input size.

function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i * j;
    }
  }
  return matrix;
}
// This function's memory usage increases quadratically with the input size.