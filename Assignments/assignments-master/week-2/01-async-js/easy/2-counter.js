let currentTime = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

async function time() {
  while (true) {
    let a = await currentTime().then(function fun() {
      let t = new Date();
      let h = t.getHours();
      let m = t.getMinutes();
      let s = t.getSeconds();
      console.log(h + " : " + m + " : " + s);
    });
  }
}

time();