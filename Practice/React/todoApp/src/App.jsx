import { useState } from "react";

function App() {
  const [todos, setTodo] = useState([
    {
      title: "study",
      description: "3hr",
      completed: false,
    },
    {
      title: "gaming",
      description: "bgmi",
      completed: false,
    },
    {
      title: "gym",
      description: "1hr",
      completed: false,
    },
  ]);

  function addTodo() {
    setTodo([...todos,{
      title: "study",
      description: "3hr",
      completed: false,
    }]);
  }

  return (
    <>
      <div>
        {todos.map(function (todo, index) {
          return (
            <Todo
              key={index}
              title={todo.title}
              description={todo.description}
            ></Todo>
          );
        })}
      </div>
      <div>
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}

function Todo(prop) {
  return (
    <div>
      <h2>title : {prop.title}</h2>
      <p>description : {prop.description}</p>
    </div>
  );
}

export default App;
