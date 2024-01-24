/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.replace(/[^a-zA-Z]/g,'').toLowerCase();
  // console.log(str);
  let ans = true;
  const n= str.length;
  const lengthh=Math.ceil(str.length/2);
  // console.log(n/2);
  for(let i=0;i<lengthh;i++){
    if(str[i]!=str[n-i-1]){
      ans=false;
    }
  }
  return ans;
}


// console.log(isPalindrome("Hello"))
module.exports = isPalindrome;
