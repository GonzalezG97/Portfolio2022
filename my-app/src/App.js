import logo from './logo.svg';
import './App.css';
import AboutMe from '../src/components/About Me/AboutMe';
import ContactMe from '../src/components/ContactMe/ContactMe';
import Portfolio from '../src/components/Portfolio/Portoflio';
import Navbar from '../src/components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AboutMe/>
      <Portfolio/>
      <ContactMe/> */}
    </div>
  );
}

export default App;
