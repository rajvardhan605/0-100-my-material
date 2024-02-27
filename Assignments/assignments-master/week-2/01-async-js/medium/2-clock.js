let clock = () => {
  let t = new Date();
  let h = t.getHours();
  let o = "AM";
  if(h>12){
    h = h%12;
    o = "PM"
  }
  let m = t.getMinutes();
  let s = t.getSeconds();
  console.log(h + " : " + m + " : " + s+ " "+o);
};
let result = () => {
  setInterval(clock, 1000);
};
result();
