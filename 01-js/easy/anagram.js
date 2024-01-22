/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const newStr1=str1.toLowerCase();
  const newStr2=str2.toLowerCase();
  const answer= false;
  const charCount=[]
  for(let i=0;i<256;i++){
    charCount[i]=0;
  }
  for(let i=0;i<newStr1.length;i++){
    charCount[newStr1.charCodeAt(i)]++;
  }
  for(let i=0;i<newStr2.length;i++){
    charCount[newStr2.charCodeAt(i)]--;
  }
  
  for(let i=0;i<256;i++){
    if(charCount[i]!=0){
      return false;
    } 
  }

  return true;
}

module.exports = isAnagram;
