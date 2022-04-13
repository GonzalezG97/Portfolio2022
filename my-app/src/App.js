import "./App.css";
import AboutMe from "../src/components/About Me/AboutMe";
import ContactMe from "../src/components/ContactMe/ContactMe";
import Portfolio from "../src/components/Portfolio/Portoflio";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
