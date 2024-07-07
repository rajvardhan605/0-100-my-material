import { useState } from "react";

export function CardInput() {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [interests, setInterests] = useState([]);
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  return (
    <div>
      <input
        placeholder="username"
        onChange={function (e) {
          const value = e.target.value;
          setUsername(value);
        }}
      ></input>
      <br></br>
      <br></br>
      <input
        placeholder="about"
        onChange={function (e) {
          const value = e.target.value;
          setAbout(value);
        }}
      ></input>
      <br></br>
      <br></br>
      <input
        placeholder="interests"
        onChange={function (e) {
          const value = e.target.value;
          let arr = value.split(" ");
          setInterests(arr);
        }}
      ></input>
      <br></br>
      <br></br>
      <input
        placeholder="linkedin"
        onChange={function (e) {
          const value = e.target.value;
          setLinkedin(value);
        }}
      ></input>
      <br></br>
      <br></br>
      <input
        placeholder="twitter"
        onChange={function (e) {
          const value = e.target.value;
          setTwitter(value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={function () {
          fetch("http://localhost:3000/write", {
            method: "POST",
            body: JSON.stringify({
              username: username,
              about: about,
              interests: interests,
              linkedin: linkedin,
              twitter: twitter,
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Card information added");
          });
        }}
      >
        Submit
      </button>
      <br></br>
      <br></br>
    </div>
  );
}
