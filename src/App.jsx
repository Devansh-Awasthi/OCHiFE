import React from "react";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import Marq from "./Components/Marq";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
function App() {
  return (
    <div className="h-screen w-full">
      <NavBar></NavBar>
      <Landing></Landing>
      <Marq></Marq>
      <About></About>
      <Eyes></Eyes>
      <Featured></Featured>
    </div>
  );
}

export default App;
