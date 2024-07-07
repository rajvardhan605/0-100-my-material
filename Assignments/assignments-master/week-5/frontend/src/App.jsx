import { useState } from "react";
import "./App.css";
import { CardInput } from "./components/CardInput";

function Inter({ Infom }) {
  return (
    <div>
      {Infom &&
        Infom.map(function (int, index) {
          return (
            <div key={index}>
              <li>{int}</li>
            </div>
          );
        })}
    </div>
  );
}

function App() {
  let [info, setInfo] = useState({});
  fetch("http://localhost:3000/read").then(async function (res) {
    const json = await res.json();
    setInfo(json.data);
  });
  return (
    <>
      <div id="container">
        <CardInput></CardInput>
        <div id="card">
          <div id="cardContent">
            <h1 id="username">{info.username}</h1>
            <p id="about">{info.about}</p>
            <h2>Interests</h2>
            <ul id="interests">
              <Inter Infom={info.interests}></Inter>
              {/* <li>{info.interests}</li>
              <li>{info.interests}</li> */}
            </ul>
            <div className="buttons">
              <a href={info.linkedin} id="linkedin" target="_blank">
                <button className="socials">Linkedin</button>
              </a>
              <a href={info.twitter} id="twitter" target="_blank">
                <button className="socials">Twitter</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
