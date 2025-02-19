/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const currentDate= new Date();
    const a = currentDate.getTime();
    let sum=0;
    for( let i =0; i<n;i++){
        sum = sum  +i;
    }
    const currentDate2= new Date();
    const b = currentDate2.getTime();

    const ans=(b-a)/1000;
    return ans;
}
let ans = calculateTime(100);
console.log(`time taken for sum of 100 = ${ans}`);
ans = calculateTime(100000);
console.log(`time taken for sum of 100000 = ${ans}`);
ans = calculateTime(1000000000);
console.log(`time taken for sum of 1000000000 = ${ans}`);

