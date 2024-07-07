import axios from "axios";
import { useEffect, useState } from "react";

///////////////////////simply sending request in url///////////////////////////

// function App(){

//   const id = 5;

//   const [todo, setTodo] = useState([]);

//   useEffect(()=>{
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(function(res){
//         setTodo(res.data.todo);
//       })
//   },[]);

//   return (
//     <div>
//       <Todo title={todo.title} description={todo.description}></Todo>
//     </div>
//   );
// }

////////////////////////doing by clicking button////////////////////////////

function App(){

  const [id, setId] = useState(1);

  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(function(res){
        setTodo(res.data.todo);
      })
  },[id]);

  return (
    <div>
      <button onClick={()=>setId(1)}>1</button>
      <button onClick={()=>setId(2)}>2</button>
      <button onClick={()=>setId(3)}>3</button>
      <button onClick={()=>setId(4)}>4</button>
      <button onClick={()=>setId(5)}>5</button>
      <Todo title={todo.title} description={todo.description}></Todo>
    </div>
  );
}

function Todo({title,description}){
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default App;