/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
<<<<<<< HEAD
    let str2 = str.toLowerCase();
    let count = 0;
    for(let i=0; i<str2.length; i++){
      if(str2[i]=='a' || str2[i]=='e' || str2[i]=='i' || str2[i]=='o' || str2[i]=='u'){
        count++;
      }
    }
    return count;
=======
    // Your code here
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
}

module.exports = countVowels;