// import logo from './logo.svg';
import "./App.css";
// import { Greet } from './components/greet';
// import Greet from './components/greet';
// import Wellcome from './components/wellcome';
// import Hello from "./components/hello";
import NavBar from './components/NavBar';
import Input from './components/input';
import React, { useState } from 'react';
import Alert from "./components/alert";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ShowAlert = (type, Message) => {
    setAlert({
      msg: Message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const Switch = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#002344";
      let input = document.getElementById("INPUT");
      input.style.backgroundColor = "black";
      let input_field = document.getElementById("Text");
      input_field.style.backgroundColor = "#31363F"
      input_field.style.color = "white";
      ShowAlert("success", ": Dark Mode has been enables");
      document.title = "Dark"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      let input = document.getElementById("INPUT");
      let input_field = document.getElementById("Text");
      input.style.backgroundColor = "white";
      input_field.style.backgroundColor = "#F9EFDB"
      input_field.style.color = "black";
      ShowAlert("success", ": Light Mode has been enables");
      document.title = "white";
    }
  }

  return (
    <div div className="App" >
      <NavBar title="Sam" Mode={Mode} Switch={Switch} />
      <div className="container">
        <Input ShowAlert={ShowAlert} mode={Mode} />
        <Alert alert={alert} />
      </div>
    </div>
  );
}

export default App;
