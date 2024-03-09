// import logo from './logo.svg';
import "./App.css";
// import { Greet } from './components/greet';
// import Wellcome from './components/wellcome';
// import Hello from "./components/hello";
import NavBar from './components/NavBar';
import Input from './components/input';
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light');
  const Switch = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#002344";
      let input = document.getElementById("INPUT");
      input.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      let input = document.getElementById("INPUT");
      input.style.backgroundColor = "white";
    }
  }
  return (
    <div className="App" >
      <NavBar title="Sam" Mode={Mode} Switch={Switch} />
      <div className="container">
        <Input mode={Mode} />
      </div>
    </div>
  );
}

export default App;
