/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const newStr = str.toLowerCase();
  let low = 0, high = newStr.length - 1;

  while(low < high){
    const a = newStr[low], b = newStr[high];

    // check if the characters aren't any punctuation mark or whitespace
    if(!(a >= 'a' && a <= 'z') && !(b >= 'a' && b <= 'z')){
      ++low;--high;
      continue;
    }
    else if(!(a >= 'a' && a <= 'z')){
      ++low;
      continue;
    }
    else if(!(b >= 'a' && b <= 'z')){
      --high;
      continue;
    }

    // check palindrome now
    if(a != b)
        return false;
    ++low;--high;
  }

  return true;
}

module.exports = isPalindrome;
