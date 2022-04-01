import logo from "./logo.svg";
import "./App.css";
import AboutMe from "../src/components/About Me/AboutMe";
import ContactMe from "../src/components/ContactMe/ContactMe";
import Portfolio from "../src/components/Portfolio/Portoflio";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tech from "./components/Tech/Tech"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<AboutMe />}></Route>
        <Route exact path='Portfolio' element={<Portfolio />}></Route>
        <Route exact path='Tech' element={<Tech />}></Route>
        <Route exact path='Contact' element={<ContactMe />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
