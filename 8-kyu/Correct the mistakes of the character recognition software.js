// The function correct takes a single parameter of string,
// which represents the digitized text to be corrected.
// The function uses an object called correctionMap
// to keep track of which characters should be correctedand what they should be changed to.
// A for loop iterates over each character in the original string.
// For each character, the code checks whether it appears in correctionMap.
// If it does, then the mapped value is used as the corrected character.
// If it doesn't appear in correctionMap, then the current character is used as-is.
// Finally, the corrected characters are concatenated into a new string, which is returned by the function.

function correct(string) {
  const correctionMap = {
    '5': 'S', 
    '0': 'O', 
    '1': 'I'
  };
  
  let correctedString = '';
  
  for(let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const correctedChar = correctionMap[currentChar] || currentChar;
    
    correctedString += correctedChar;
  }
  
  return correctedString;
}

