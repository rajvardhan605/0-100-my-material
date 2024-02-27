let clock = () => {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  console.log(hour + " : " + minutes + " : " + seconds);
}
setInterval(clock,1000);