/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
<<<<<<< HEAD
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let ans = true;
  if(str1.length != str2.length){
    return false;
  }
  else{
    for(let i=0; i<str1.length; i++){
      ans = false;
      for(let j=0; j<str1.length; j++){
        if(str1[i]==str2[j]){
          ans = true;
        }
      }
      if(ans == false){
        return false;
      }
    }
  }
  return true;
=======

>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
}

module.exports = isAnagram;
