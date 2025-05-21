// Function to divide the array into chunks with sum <= n using a greedy approach
const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (currentSum + num <= n) {
      currentSubarray.push(num);
      currentSum += num;
    } else {
      if (currentSubarray.length > 0) {
        result.push(currentSubarray);
      }
      // Start a new subarray with the current number
      currentSubarray = [num];
      currentSum = num;
    }
  }

  // Push the last subarray if any elements remain
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Example array
const arr = [1, 2, 3, 4, 1, 0, 2, 2];

// Prompt user for input and convert it to a number
const n = parseInt(prompt("Enter maximum sum for each chunk (n):"), 10);

// Call the function and display the result

const result = divide(arr, n);
alert("Result: " + JSON.stringify(result));
