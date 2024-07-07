import { useEffect, useState } from "react";

///////////////using setinterval ///////////////////////////

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     setInterval(()=>{
//       fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//         const json = await res.json();
//         setTodos(json.todos);
//       })
//     },2000);
//   }, []);
//   return (
//     <div>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   );
// }

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, [counter]);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Next Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
