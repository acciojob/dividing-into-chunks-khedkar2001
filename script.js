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
      currentSubarray = [num];
      currentSum = num;
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter maximum sum for each chunk (n):"), 10);
const result = divide(arr, n);
alert(JSON.stringify(result)); // ✅ Matches Cypress test
