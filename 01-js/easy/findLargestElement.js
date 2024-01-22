/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let a = numbers[0];
    let largest=a;
    for( let i=0; i< numbers.length; i++){
        if(numbers[i]>a){
            largest = numbers[i];
            a=largest;
        }
    }
    return largest;
}

module.exports = findLargestElement;
