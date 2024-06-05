function subArraySumToTarget(arr, target) {
  let startIndex = 0; // starting pointer to slice the array.

  for (let i = 0; i < arr.length; i++) {
    const subArray = arr.slice(startIndex, i + 1); // slice function excludes the end pointer so we add 1 to i.
    const sumSubArray = subArray.reduce((tot, nbr) => tot + nbr, 0);
    if (sumSubArray == target) {
      return true;
    }
    if (sumSubArray > target) { // if the sum of array is greater than the target...
      startIndex++; // remove the first item by incrementing the start pointer by 1...
      i--; // but still keep the current number of iteration by decrementing it by 1.
    }

    // if the sum is less than the target, the iteration goes on with the incremented i... 
    // to update the end pointer.
  }
  return false;
}

console.log(subArraySumToTarget([4, 2, 7, 1, 9, 5], 17));
