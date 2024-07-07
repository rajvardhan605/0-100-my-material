import { useState } from "react";
import { useRecoilState} from "recoil";
import { todoKey, todos } from "../store/atoms/todos";

export default function TodoInput() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useRecoilState(todos);
  const [keyValue, setKeyValue] = useRecoilState(todoKey);

  const initialState = {
    title: '',
    description: ''
  };

  function handlesubmit(e) {
    e.preventDefault();
    setKeyValue((e)=>e+1);
    setTodo([...todo, { id: keyValue, title: title, description: description }]);
    setTitle(initialState.title);
    setDescription(initialState.description);
  }
  
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          name="title"
          value={title}
          placeholder="Add todo title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          type="text"
          value={description}
          placeholder="Add todo descrioption"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
