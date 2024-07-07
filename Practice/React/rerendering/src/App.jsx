import { useState } from "react";

function App() {
  return (
    <>
      <Button></Button>
      <Display title="dev"></Display>
    </>
  );
}

function Button() {
  const [name, setName] = useState("raj");
  return (
    <>
      <button onClick={randomNumber}>Click me to change name</button>
      <Display title={name}></Display>
    </>
  );

  function randomNumber() {
    let a = Math.random();
    setName(a);
  }
}

function Display({ title }) {
  return <div>my name is {title}</div>;
}

export default App;
