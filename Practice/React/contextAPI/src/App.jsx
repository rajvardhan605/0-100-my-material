/////////////////without using contextAPI///////////////////////////////

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} setCount={setCount}></Count>
//     </div>
//   );
// }

// function Count({count, setCount}) {
//   return (
//     <div>
//       <CountRender count={count}></CountRender>
//       <Button count={count} setCount={setCount}></Button>
//     </div>
//   );
// }

// function CountRender({count}){
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   );
// }

// function Button({count, setCount}){
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }

// export default App;

//////////////////////////////by using contextAPI/////////////////////////////////

import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  console.log("rerender");
  return (
    <div>
      <CountRender></CountRender>
      <Button setCount={setCount}></Button>
    </div>
  );
}

function CountRender() {
  const count = useContext(CountContext);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
