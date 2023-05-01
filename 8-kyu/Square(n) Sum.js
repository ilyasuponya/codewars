// This function takes in an array of numbers numbers,
// and then uses the forEach() method to iterate over each number in the array.
// For each number, we square it by multiplying it by itself (num * num),
// and add the result to a running total of the sums.
// Finally, the function returns the total sum of squares.



function squareSum(numbers) {
    let sum = 0;
    numbers.forEach(function(num) {
      sum += num * num;
    });
    return sum;
  }












// Complete the square sum function so that it squares each number
// passed into it and then sums the results together.