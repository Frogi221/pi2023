/*import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Glowna } from "./Glowna";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />  }      
        <Glowna onFormSwitch={toggleForm} /> 

    </div>

  );
}

export default App;
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import { Glowna } from "./Glowna";
import { Haslo } from "./Haslo";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/glowna" element={<Glowna />} />
          <Route path="/haslo" element={<Haslo />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
