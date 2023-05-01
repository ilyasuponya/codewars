/// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

/// This function takes in a string dna representing the DNA sequence 
/// and returns a new string with all 'T' replaced by 'U'.
/// We accomplish this by using the .replace() method on the input string with a regular expression /T/g,
/// which matches all occurrences of 'T', and replacing them with 'U'.


/// /T/g is a regular expression pattern used for matching all occurrences of the letter 'T' in any given string.
/// The forward slashes (/) are the delimiters that indicate the start and end of the regular expression pattern.
/// T within the pattern represents the character we want to match. In this case, it's the nucleic acid base 'T'.
/// Finally, the g at the end is called a "flag" which tells the replace() method to replace all occurrences of the pattern in the input string.
/// So, when we pass /T/g as the search pattern to the .replace() method along with 'U' as its replacement value, it replaces all 'T's in the input string with 'U'.


function dnaToRna(dna) {
    // Replacing 'T' nucleic acid base with 'U'
    return dna.replace(/T/g, 'U');
  }
  