// The removeEveryOther function takes an array as its parameter and returns a new array
// containing every other element from the original array, starting with the first.
// First, a new empty array called outputArray is created to store the filtered values.
// Next, a for loop is used to iterate through each element in the input array.
// The if statement checks whether the index of the current element is even (i % 2 === 0),
// meaning that it should be included in the output array.
// If it is, then the current element (arr[i]) is pushed into the outputArray.
// Finally, the function returns the outputArray,
// which contains only the elements that passed the condition of having an even index.

function removeEveryOther(arr) {
  const outputArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      outputArray.push(arr[i]);
    }
  }

  return outputArray;
}
