import {useState} from 'react';
import React from 'react';

function App(){
  const [title, setTitle] = useState(0);
  function updateTitle(){
    setTitle(Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Click here to update title</button>
      <Header title={title}></Header>
      <Header title="raj"></Header>
      <Header title="ankit"></Header>
      <Header title="lfsj"></Header>
      <Header title="jsdlkjf"></Header>
    </div>
  );
}

const Header = React.memo(function Header(prop) {
  return(
    <h4>my name is {prop.title}</h4>
  );
})

export default App;