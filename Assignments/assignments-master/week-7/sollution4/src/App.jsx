import { useState } from "react";

function App(){
  const words = ["raj", "is", "a", "good", "boy", "works", "as", "developer", "trainee", "at", "cloud", "analogy"]

  const [para, setPara] = useState("");

  
  return(
    <div>
      <input type="text" placeholder="Enter no of words"></input>
      <button>Generate Paragraph</button>
      <div>{para}</div>
    </div>
  );
}

export default App;