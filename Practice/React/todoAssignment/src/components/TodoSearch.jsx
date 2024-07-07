import { useSetRecoilState } from "recoil";
import { search } from "../store/atoms/todos";

export default function TodoSearch(){
  const setInput = useSetRecoilState(search);
  return(
    <div>
      <input onChange={(event)=>{
        setInput(event.target.value);
      }} type="text" placeholder="Search..."/>
    </div>
  );
}