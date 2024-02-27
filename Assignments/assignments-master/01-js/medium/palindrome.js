/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str2 = str.toLowerCase();
  for(let i=0,j=str2.length-1; i<str2.length/2; i++,j--){
    if(str2.length>1){
      while(str2[i].charCodeAt(0) >= 32 && str2[i].charCodeAt(0)<=47 || str2[i].charCodeAt(0) >= 58 && str2[i].charCodeAt(0)<=64){
        i++;
      }
      while(str2[j].charCodeAt(0) >= 32 && str2[j].charCodeAt(0)<=47 || str2[j].charCodeAt(0) >= 58 && str2[j].charCodeAt(0)<=64){
        j--;
      }
    }
    if(str2[i] != str2[j]){
      return false;
    }
  }
  return true;
}


module.exports = isPalindrome;
