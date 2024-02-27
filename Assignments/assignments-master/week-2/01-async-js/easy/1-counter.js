let currentTime = () => {
  let t = new Date();
  let h = t.getHours();
  let m = t.getMinutes();
  let s = t.getSeconds();
  console.log(h+" : "+m+" : "+s);
};
setInterval(currentTime,1000);
