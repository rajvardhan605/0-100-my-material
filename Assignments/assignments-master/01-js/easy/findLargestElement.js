/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
<<<<<<< HEAD
    let max = numbers[0];
    for(var i = 1; i < numbers.length; i++) {
      if(max < numbers[i]){
        max = numbers[i];
      }
    }
    return max;
=======
    
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
}

module.exports = findLargestElement;