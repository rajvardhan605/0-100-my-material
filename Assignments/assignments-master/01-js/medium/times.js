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
<<<<<<< HEAD
    let t1 = new Date();
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    let t2 = new Date();
    console.log((t2-t1)/1000);
}
calculateTime(100000000000000000000000000000000000000);
=======
    return 0.01;
}
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
