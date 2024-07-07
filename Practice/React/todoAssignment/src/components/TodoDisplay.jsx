import { useRecoilValue } from "recoil";
import { search, todos } from "../store/atoms/todos";

export default function TodoDisplay(){
  const todo = useRecoilValue(todos);
  const filter = useRecoilValue(search);
  const filteredUsers = todo.filter((e)=>e.title.includes(filter) || e.description.includes(filter))
  return(
    <div>
      {filteredUsers.map((e,index)=>(
        <TodoItem key = {index} title={e.title} description={e.description}/>
      ))}
    </div>
  );
}

function TodoItem(prop){
  return(
    <div>
      <h2>{prop.title}</h2>
      <p>{prop.description}</p>
    </div>
  );
}