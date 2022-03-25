import logo from './logo.svg';
import './App.css';
import AboutMe from '../src/components/About Me/AboutMe';
import ContactMe from '../src/components/ContactMe/ContactMe';
import Portfolio from '../src/components/Portfolio/Portoflio'

function App() {
  return (
    <div className="App">
      <AboutMe/>
      <Portfolio/>
      <ContactMe/>
    </div>
  );
}

export default App;
