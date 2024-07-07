/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

<<<<<<< HEAD
async function sleep(milliseconds) {
  return await new Promise((resolve)=>{
    setTimeout(resolve,milliseconds);
  })
=======
function sleep(milliseconds) {
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
}

module.exports = sleep;
