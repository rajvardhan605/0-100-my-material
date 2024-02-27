//promises in javascript/////////////////////////////////////////////////

function message(){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("welocome")
    },3000)
  })
}
function welcome(txt){
  console.log(txt+" Raj")
}
async function main(){
  //message().then(welcome);
  let value = await message().then(welcome);
  //console.log(value);
  console.log("in main")
}
main();
console.log("after all")