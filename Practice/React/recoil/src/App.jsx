import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  );
}

function EvenOdd(){
  const isEven = useRecoilValue(evenSelector);
  return <div>It is {isEven ? "Even" : "Odd"}</div>
}

function Count() {
  return (
    <div>
      <CountRender></CountRender>
      <Button></Button>
      <EvenOdd></EvenOdd>
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

function Button() {
  const setCount = useSetRecoilState(countAtom);
  console.log("rerender")
  return (
    <div>
      <button onClick={()=>setCount((count)=>count+1)}>+</button>
      <button onClick={()=>setCount((count)=>count-1)}>-</button>
    </div>
  );
}

export default App;