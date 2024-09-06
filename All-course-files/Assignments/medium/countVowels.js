/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let ans = 0;
    for(let i = 0; i < str.length; i++){
      let alpha = str[i].toLowerCase();
      if(alpha === 'a' || alpha === 'e' || alpha === 'i' || alpha === 'o' || alpha === 'u'){
        ans++;
      }
    }

    return ans;
}

module.exports = countVowels;