//Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them
// if they are in the wrong order. This process is repeated until the list is sorted.


function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


//Selection Sort divides the input list into two parts: the sublist of items already sorted
 //and the sublist of items remaining to be sorted. It repeatedly selects the smallest
  //(or largest) element from the unsorted sublist and moves it to the sorted sublist.


function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}


//Insertion Sort builds the final sorted array one item at a time.
// It is much less efficient on large lists than more advanced algorithms
// such as quicksort, heapsort, or merge sort.


function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}


//Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. 
//Most implementations produce a stable sort, meaning that the implementation preserves the input order
// of equal elements in the sorted output.



function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


//Quick Sort is an efficient, in-place, divide-and-conquer, comparison-based sorting algorithm.
// It works by selecting a ‘pivot’ element from the array and partitioning the other elements 
//into two sub-arrays, according to whether they are less than or greater than the pivot.



function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}


//Heap Sort is a comparison-based sorting technique based on a binary heap data structure.
// It is similar to selection sort where we first find the maximum element 
//and place the maximum element at the end.



function heapSort(arr) {
    let len = arr.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, len, i);
    }

    for (let i = len - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, len, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, len, largest);
    }
}
