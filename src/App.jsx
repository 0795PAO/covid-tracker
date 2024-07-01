import React from "react";
import Home from "./componentes/Home";
import Navbar2 from "./componentes/Navbar2";
import Symptom from "./componentes/Symptom";
import Prevent from "./componentes/Prevent"
import "./app.css";

function App  ()  {
  return (
    <div className="covimap">
      <Navbar2 />
      <Home />
      <Symptom />
      <Prevent />
    </div>
  );
};

export default App;
