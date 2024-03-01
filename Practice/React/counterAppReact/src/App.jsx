import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}

function CustomButton(prop) {
  function onClickHandler() {
    prop.setCount(prop.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {prop.count}</button>;
}

export default App;
