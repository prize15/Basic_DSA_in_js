//Linear search is the simplest search algorithm. It checks each element of the array one by one
// until the desired element is found or the array ends.


function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1; // Element not found
}


//Binary search is more efficient than linear search but requires the array to be sorted.
// It repeatedly divides the search interval in half.

//Iterative Approach


function binarySearchIterative(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === value) {
            return mid;
        } else if (arr[mid] < value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1; // Element not found
}

//Recursive Approach


function binarySearchRecursive(arr, value, start, end) {
    if (start > end) {
        return -1; // Element not found
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === value) {
        return mid;
    } else if (arr[mid] < value) {
        return binarySearchRecursive(arr, value, mid + 1, end);
    } else {
        return binarySearchRecursive(arr, value, start, mid - 1);
    }
}


//Jump search works on sorted arrays and uses a fixed step size to jump ahead
// and then perform a linear search within the block.



function jumpSearch(arr, value) {
    let length = arr.length;
    let step = Math.floor(Math.sqrt(length));
    let prev = 0;

    while (arr[Math.min(step, length) - 1] < value) {
        prev = step;
        step += Math.floor(Math.sqrt(length));
        if (prev >= length) {
            return -1; // Element not found
        }
    }

    for (let i = prev; i < Math.min(step, length); i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1; // Element not found
}


//Exponential search is useful for unbounded or infinite lists.
// It starts with a subarray of size 1 and exponentially increases the size 
//until the value is found or the end of the array is reached.



function exponentialSearch(arr, value) {
    if (arr[0] === value) {
        return 0;
    }

    let i = 1;
    while (i < arr.length && arr[i] <= value) {
        i = i * 2;
    }

    return binarySearchRecursive(arr, value, i / 2, Math.min(i, arr.length - 1));
}
