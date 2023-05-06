///Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
  // Convert the number to a string
  let strNum = n.toString();
  
  // Split the string into an array of characters
  let charArr = strNum.split("");
  
  // Reverse the order of the array
  let revArr = charArr.reverse();
  
  // Convert each character back to a number
  let numArr = revArr.map(Number);
  
  return numArr;
}




///This function first converts the input number to a string using toString().
///It then splits the string into an array of individual characters using split("").
///The order of the array is then reversed using reverse().
///Finally, the map() method is used to loop through each character in the array and convert it back to a number using Number().
///The resulting reversed array of digits is then returned.