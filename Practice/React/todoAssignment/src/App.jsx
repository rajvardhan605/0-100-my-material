import { RecoilRoot } from "recoil";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";
import TodoSearch from "./components/TodoSearch";

function App() {
  return (
    <div>
      <RecoilRoot>
        <TodoInput></TodoInput>
        <br></br>
        <TodoSearch></TodoSearch>
        <TodoDisplay></TodoDisplay>
      </RecoilRoot>
    </div>
  );
}

export default App;
