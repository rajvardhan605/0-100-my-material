import { useMemo } from "react";
import { useState } from "react";

/////////////////////////without using useMemo////////////////////////

// function App(){
//   const [input, setInput] = useState(0);
//   const [counter, setCounter] = useState(0);
//   let sum = 0;
//     for(let i=1; i<=input; i++){
//       sum += i;
//     }
//   return (
//     <div>
//       Enter Number : <input name="Number" type="number" onChange={(e)=>setInput(e.target.value)}></input>
//       <p>Sum : {sum}</p>
//       <button onClick={()=> setCounter(counter+1)}>Counter : {counter}</button>
//     </div>
//   );
// }

/////////////////////////////by using useMemo////////////////////////////////

function App() {
  const [input, setInput] = useState(0);
  const [counter, setCounter] = useState(0);
  let sum = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    return sum;
  },[input]);
  return (
    <div>
      Enter Number :{" "}
      <input
        name="Number"
        type="number"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <p>Sum : {sum}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Counter : {counter}
      </button>
    </div>
  );
}

export default App;
