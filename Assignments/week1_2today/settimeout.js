let t2 = 0;
let sum = (a,b) => {
  t2 = new Date();
  console.log(a+b);
}
let t1 = new Date();
setTimeout(sum,1000,3,4);
console.log(t1-t2);